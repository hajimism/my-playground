import { LucideIcon } from "lucide-react";
import { Route } from "next";

export type CommandGroup = {
  heading: string;
  commands: Command[];
};

type CommandBase = {
  label: string;
  icon: LucideIcon;
};

export type LinkCommand = {
  type: "LINK";
  href: Route;
} & CommandBase;

export type ThemeCommand = {
  type: "THEME";
  theme: string;
} & CommandBase;

export type Command = LinkCommand | ThemeCommand;
