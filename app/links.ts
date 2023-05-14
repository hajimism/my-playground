import Link from "next/link";
import { ComponentProps } from "react";

export type LinksTableItem = {
  path: ComponentProps<typeof Link>["href"];
  description: string;
  scraps: Scrap[];
};

export type Scrap = {
  url: string;
  title: string;
};

export const LINKS: LinksTableItem[] = [
  {
    path: "/next-image-blur",
    description:
      "Tried blurDataURL property to improve flickering of next/image when mounting.",
    scraps: [
      {
        url: "https://zenn.dev/ikenohi/scraps/907d8b909a0824",
        title: "next/imageでremote imagesをblurさせたい",
      },
    ],
  },
];
