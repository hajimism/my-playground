"use client";

import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import React, { FC } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/Command";

import type {
  CommandGroup as CommandGroupType,
  Command as CommandType,
} from "./type";

type Props = {
  activateKey?: string | undefined;
  commandGroups: CommandGroupType[];
  emptyMessage?: string | undefined;
  plaeholder?: string | undefined;
};

export const CommandView: FC<Props> = ({
  activateKey = "k",
  commandGroups,
  emptyMessage = "No results found.",
  plaeholder = "Type a command or search...",
}) => {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === activateKey && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [activateKey]);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  const commandByType = (command: CommandType) => {
    switch (command.type) {
      case "LINK":
        return () => router.push(command.href);
      case "THEME":
        return () => setTheme(command.theme);
    }
  };

  if (commandGroups.length === 0) return <></>;

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder={plaeholder} />
      <CommandList>
        <CommandEmpty>{emptyMessage}</CommandEmpty>
        {commandGroups.map(({ heading, commands }) => (
          <>
            <CommandGroup heading={heading} key={heading}>
              {commands.map((command) => (
                <CommandItem
                  key={command.label}
                  onSelect={() => runCommand(commandByType(command))}
                >
                  <command.icon className="mr-2 h-4 w-4" />
                  {command.label}
                </CommandItem>
              ))}
            </CommandGroup>
            <CommandSeparator />
          </>
        ))}
      </CommandList>
    </CommandDialog>
  );
};
