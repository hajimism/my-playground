import { FC } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

import type { CommandGroup as CommandGroupType } from "./type";

type Props = {
  open: boolean;
  onOpenChange: (_open: boolean) => void;
  commandGroups: CommandGroupType[];
  emptyMessage?: string | undefined;
  plaeholder?: string | undefined;
};

export const CommandView: FC<Props> = ({
  open,
  onOpenChange,
  commandGroups,
  emptyMessage = "No results found.",
  plaeholder = "Type a command or search...",
}) => {
  if (commandGroups.length === 0) return <></>;

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder={plaeholder} />
      <CommandList>
        <CommandEmpty>{emptyMessage}</CommandEmpty>
        {commandGroups.map(({ heading, commands }) => (
          <>
            <CommandGroup heading={heading} key={heading}>
              {commands.map((command) => (
                <CommandItem key={command.label} onSelect={command.action}>
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
