import Link from "next/link";
import { ComponentProps } from "react";

type LinksTableItem = {
  path: ComponentProps<typeof Link>["href"];
  description: string;
};

export const LINKS: LinksTableItem[] = [
  {
    path: "/next-image-blur",
    description:
      "Tried blurDataURL property to improve flickering of next/image when mounting.",
  },
];
