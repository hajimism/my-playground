import { ComponentProps, forwardRef } from "react";

import { cn } from "@/lib/utils";

const H1 = forwardRef<HTMLHeadingElement, ComponentProps<"h1">>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-sage-12",
        className
      )}
      {...props}
    />
  )
);
H1.displayName = "H1";

const H2 = forwardRef<HTMLHeadingElement, ComponentProps<"h2">>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        "mt-10 scroll-m-20 border-b border-b-sage-8 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 text-sage-12",
        className
      )}
      {...props}
    />
  )
);
H2.displayName = "H2";

const H3 = forwardRef<HTMLHeadingElement, ComponentProps<"h3">>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight text-sage-12",
        className
      )}
      {...props}
    />
  )
);
H3.displayName = "H3";

const H4 = forwardRef<HTMLHeadingElement, ComponentProps<"h4">>(
  ({ className, ...props }, ref) => (
    <h4
      ref={ref}
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight text-sage-12",
        className
      )}
      {...props}
    />
  )
);
H4.displayName = "H4";

const P = forwardRef<HTMLParagraphElement, ComponentProps<"p">>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  )
);
P.displayName = "P";

const List = forwardRef<HTMLUListElement, ComponentProps<"ul">>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2 text-sage-12", className)}
      {...props}
    />
  )
);
List.displayName = "List";

export { H1, H2, H3, H4, P, List };
