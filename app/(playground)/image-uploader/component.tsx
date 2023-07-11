import "client-only";

import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import { FC, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import { cn } from "@/lib/utils";

import { FileWithPreview } from "./type";

type Props = {
  file: FileWithPreview | undefined;
  onFileChange: (_file: FileWithPreview) => void;
  className?: string | undefined;
};

const withPreview = (file: File) =>
  Object.assign(file, {
    preview: URL.createObjectURL(file),
  });

export const ImageUploader: FC<Props> = ({ file, onFileChange, className }) => {
  const onDrop = (files: File[]) =>
    files[0] && onFileChange(withPreview(files[0]));

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop,
    maxFiles: 1,
  });

  useEffect(() => {
    return () => file && URL.revokeObjectURL(file.preview);
  }, [file]);

  return (
    <section className="container">
      <div
        {...getRootProps({ className: "dropzone" })}
        className={cn(
          "aspect-video w-80 rounded bg-muted-foreground hover:cursor-pointer",
          "flex justify-center items-center",
          className
        )}
      >
        <input {...getInputProps()} />

        {file ? (
          <div className="relative h-full w-full rounded bg-white">
            <Image
              alt={file.name}
              fill
              className="object-contain"
              src={file.preview}
              onLoad={() => URL.revokeObjectURL(file.preview)}
            />
          </div>
        ) : (
          <ImageIcon />
        )}
      </div>
    </section>
  );
};
