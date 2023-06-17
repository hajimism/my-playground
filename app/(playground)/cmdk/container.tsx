"use client";

import { FC } from "react";

import {
  usePageCommandGroup,
  useThemeCommandGroup,
  useToggleCommandWithKey,
} from "./hook";
import { generateCommandGroups } from "./lib";
import { CommandView } from "./view";

import type { CommandGroup } from "./type";

export const CommandPalette: FC = () => {
  const { open, setOpen, runCommand } = useToggleCommandWithKey();
  const pageCommandGroup = usePageCommandGroup();
  const themeCommandGroup = useThemeCommandGroup();

  const commandGroups: CommandGroup[] = generateCommandGroups(
    [pageCommandGroup, themeCommandGroup],
    runCommand
  );

  return (
    <CommandView
      open={open}
      onOpenChange={setOpen}
      commandGroups={commandGroups}
    />
  );
};
