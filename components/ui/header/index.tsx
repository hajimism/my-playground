import { Github } from "lucide-react";
import Link from "next/link";

import { ThemeSwitcher } from "@/components/functional/ThemeSwitcher";

import { TEXT_GRADIENT } from "@/app/gradient";

import { cn } from "@/lib/utils";

import { H1 } from "../typography";

export const Header = () => {
  return (
    <header className="supports-backdrop-blur:bg-sage-1/60 sticky top-0 z-40 w-full border-b border-sage-4 bg-sage-1/95 shadow-sm backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <H1 className={cn("py-1 text-2xl lg:text-2xl", TEXT_GRADIENT)}>
          <Link href={"/"}>Playground of hajimism</Link>
        </H1>
        <nav className="flex items-center gap-8">
          <a
            href="https://github.com/hajimism/my-playground"
            target="_blank"
            rel="noopener"
            className="transition-colors hover:text-teal-11"
          >
            <Github />
          </a>
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
};
