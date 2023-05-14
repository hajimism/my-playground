"use client";

import * as TogglePrimitive from "@radix-ui/react-toggle";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm text-sage-12 font-medium transition-colors bg-sage-1 data-[state=on]:bg-sage-3 focus:outline-none focus:ring-2 focus:ring-sage-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-sage-5",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "bg-transparent border border-sage-2 hover:bg-sage-4",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Toggle = forwardRef<
  ElementRef<typeof TogglePrimitive.Root>,
  ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
