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
    path: "/lexical-editor",
    description: "Tried Lexical Editor.",
    scraps: [
      {
        url: "https://zenn.dev/ikenohi/scraps/16de7d33725032",
        title: "Lexicalさんはじめまして！",
      },
      {
        url: "https://zenn.dev/ikenohi/scraps/e2832cbcb566a2",
        title: "Lexical 触ってみるぞ",
      },
      {
        url: "https://zenn.dev/ikenohi/scraps/777603941c0fe8",
        title: "Lexical Playgroundの中を覗く",
      },
      {
        url: "https://zenn.dev/ikenohi/scraps/14afc4faec5f10",
        title: "LexicalのCollapsibleを読む",
      },
    ],
  },
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
