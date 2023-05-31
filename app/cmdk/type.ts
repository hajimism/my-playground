import { LucideIcon } from "lucide-react";

export type CommandGroup = {
  heading: string;
  commands: Command[];
};

export type Command = {
  label: string;
  icon: LucideIcon;
  action: () => void;
};
