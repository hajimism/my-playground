"use client";

import { Link, Moon } from "lucide-react";
import { FC, use } from "react";

import { getLinks } from "./lib";
import { CommandView } from "./view";

import type { CommandGroup, LinkCommand, ThemeCommand } from "./type";

const THEME_COMMANDS: ThemeCommand[] = [
  { label: "Light", theme: "light", icon: Moon },
  { label: "Dark", theme: "dark", icon: Moon },
].map((item) => ({ type: "THEME", ...item }));

export const CommandPalette: FC = () => {
  const { links } = use(getLinks());

  const linkCommands: LinkCommand[] = links.map((link) => ({
    type: "LINK",
    href: link.path,
    label: link.path,
    icon: Link,
  }));

  const commandGroups: CommandGroup[] = [
    { heading: "Link", commands: linkCommands },
    { heading: "Theme", commands: THEME_COMMANDS },
  ];

  return <CommandView commandGroups={commandGroups} />;
};
