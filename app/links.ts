import { Route } from "next";

export type LinkTableItem = {
  path: Route;
  description: string;
  scraps: Scrap[];
};

export type Scrap = {
  url: string;
  title: string;
};

export const LINKS: LinkTableItem[] = [
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
    path: "/dnd-linked-list",
    description: "List component that is sorted with dnd-able title list.",
    scraps: [],
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
  {
    path: "/zoomable-image",
    description: "Implement zoom-able image w/ radix-dialog",
    scraps: [],
  },
  {
    path: "/api/dynamic-og-image",
    description: "Dynamic og image with ImageResponse. enter: ?text=your_text",
    scraps: [],
  },
  {
    path: "/cmdk",
    description: "Press command K to open command palette",
    scraps: [],
  },
  {
    path: "/combobox-and-fetch",
    description: "Select and fetch detail, creating new is also available",
    scraps: [],
  },
  {
    path: "/avatar-group",
    description: "AvatarGroup component inspired by Chakra UI AvatarGroup",
    scraps: [
      {
        url: "https://zenn.dev/ikenohi/scraps/4497f0aaf15def",
        title: "shadcn/uiでAvatarGroupを実装したい",
      },
    ],
  },
  {
    path: "/color-map",
    description:
      "custom shadcn/ui themes using @radix-ui/colors via windy-radix-palette",
    scraps: [
      {
        url: "https://zenn.dev/ikenohi/scraps/fde4a74c6956c2",
        title: "shadcn/uiのcolorを@radix-ui/colorsを使ってカスタマイズする",
      },
    ],
  },
  {
    path: "/tab-with-router",
    description: "custom shadcn/ui/tabs in conjunction with query params",
    scraps: [
      {
        url: "https://zenn.dev/ikenohi/scraps/8a85a7d0bcd443",
        title: "queryParamsと連動するTabがほしい",
      },
    ],
  },
];
