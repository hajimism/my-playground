"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

import { cn } from "@/lib/utils";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export const ZoomableImage: FC<Props> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn("cursor-zoom-in", className)}
        />
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal className="fixed inset-0 z-50">
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <DialogPrimitive.Overlay
            className={cn(
              "fixed inset-0 z-50 bg-background/80 backdrop-blur transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
              `bg-no-repeat bg-cover bg-center filter blur-xl`
            )}
            style={{ backgroundImage: `url(${src})` }}
          />
          <DialogPrimitive.Content className="fixed z-50 rounded-b-lg p-0 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-3xl sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0">
            <Image src={src} alt="孟" width={800} height={800} />
            <DialogPrimitive.Close className="absolute right-4 top-4 transition-opacity rounded-sm opacity-70 ring-offset-background hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-sage-1">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </DialogPrimitive.Content>
        </div>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
