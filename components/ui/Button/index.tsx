import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sage-10 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-sage-8",
  {
    variants: {
      variant: {
        default: "bg-sage-12 text-sage-1 hover:bg-sage-11",
        destructive: "bg-red-11 text-red-1 hover:bg-red-9 focus:ring-red-8",
        outline: "bg-transparent border border-sage-6 hover:bg-sage-3",
        subtle: "bg-sage-3 text-sage-12 hover:bg-sage-5",
        ghost: "bg-transparent hover:bg-sage-3 text-sage-12",
        link: "bg-transparent underline-offset-4 hover:underline text-sage-12 hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
