"use client";

import { Code2 } from "lucide-react";
import { usePathname } from "next/navigation";

import { LINKS } from "../links";

const PATH_TO_TREE_IN_REOO =
  "https://github.com/hajimism/my-playground/tree/main/app";

export const ToSource = () => {
  const pathname = usePathname();
  const pageLink = LINKS.find((link) => link.path === pathname);
  if (!pageLink) return <></>;

  const githubLink = `${PATH_TO_TREE_IN_REOO}${pageLink.path.toString()}`;

  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted shadow-lg">
      <a
        href={githubLink}
        target="_blank"
        rel="noopener"
        className="text-muted-foreground transition-colors hover:text-teal-11"
      >
        <Code2 className="pb-px pl-px" />
      </a>
    </div>
  );
};
