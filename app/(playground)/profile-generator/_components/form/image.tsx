"use client";

import { atom, useAtom, useAtomValue } from "jotai";
import { X, User } from "lucide-react";
import Image from "next/image";
import { forwardRef, useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import { cn } from "@/lib/utils";

import type { FC, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type Props = {
  file: File | undefined;
  setFile: (_file: File | undefined) => void;
  onReset?: () => void;
  textOnError?: string;
} & InputProps;

const ImageUploader: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({
    file,
    setFile,
    className,
    onReset,
    textOnError = "Ooops! Something went wrong.",
    children,
    disabled,
    ...inputProps
  }) => {
    const [errorText, setErrorText] = useState("");
    const preview = file && URL.createObjectURL(file);
    const onDropAccepted = (files: File[]) => files[0] && setFile(files[0]);

    const { getRootProps, getInputProps } = useDropzone({
      accept: {
        "image/avif": [".avif"],
        "image/gif": [".gif"],
        "image/png": [".png"],
        "image/jpeg": [".jpeg", ".jpg"],
        "image/svg+xml": [".svg"],
        "image/webp": [".webp"],
      },
      onDropAccepted,
      maxFiles: 1,
      disabled: Boolean(disabled),
      maxSize: 5000000, // 5MB
      onError: () => setErrorText(textOnError),
    });

    useEffect(
      () => () => {
        preview && URL.revokeObjectURL(preview);
      },
      [preview]
    );

    const reset = useCallback(() => {
      setFile(undefined);
      onReset?.();
    }, [setFile, onReset]);

    return (
      <>
        <div
          {...getRootProps({ className: "dropzone" })}
          className={cn(
            "group aspect-video w-80 rounded bg-muted-foreground hover:cursor-pointer",
            "flex items-center justify-center",
            disabled && "hover:cursor-not-allowed",
            className
          )}
        >
          <input
            type="file"
            {...getInputProps()}
            {...inputProps}
            className={cn(disabled && "cursor-not-allowed")}
          />

          {preview ? (
            <div className="relative h-full w-full rounded bg-muted">
              <X
                className={cn(
                  "hidden group-hover:block",
                  "absolute -right-2 -top-2 z-10 p-0.5",
                  "h-5 w-5 rounded-full border border-muted bg-muted-foreground text-muted"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  reset();
                }}
              />
              <Image
                alt={file.name}
                fill
                className="object-contain"
                src={preview}
                onLoad={() => URL.revokeObjectURL(preview)}
                onError={() => URL.revokeObjectURL(preview)}
              />
            </div>
          ) : (
            <>{children}</>
          )}
        </div>
        <p className="text-destructive">{errorText}</p>
      </>
    );
  }
);
ImageUploader.displayName = "ImageUploader";

const imageAtom = atom<File | undefined>(undefined);

export const ImageInput = () => {
  const [image, setImage] = useAtom(imageAtom);
  return <ImageUploader file={image} setFile={setImage} />;
};

export const ImagePreview = () => {
  const image = useAtomValue(imageAtom);
  const preview = image && URL.createObjectURL(image);

  useEffect(
    () => () => {
      preview && URL.revokeObjectURL(preview);
    },
    [preview]
  );

  return (
    <div className="flex h-60 w-60 items-center justify-center rounded-xl bg-blue-2">
      {preview ? (
        <Image
          alt={image.name}
          width={240}
          height={240}
          className="border-[3px] object-contain"
          src={preview}
          onLoad={() => URL.revokeObjectURL(preview)}
          onError={() => URL.revokeObjectURL(preview)}
        />
      ) : (
        <p className="text-blue-11">
          <User className="h-32 w-32" />
        </p>
      )}
    </div>
  );
};
