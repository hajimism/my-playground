import { Check, ChevronsUpDown, Plus } from "lucide-react";
import { FC } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";

type Option = {
  value: string;
  label: string;
};

type Props = {
  options: Option[];
  value: string;
  onValueChange: (_value: string) => void;
  open: boolean;
  onOpenChange: (_open: boolean) => void;
  helperText?: string | undefined;
  placeholder?: string | undefined;
};

export const Combobox: FC<Props> = ({
  options,
  value,
  onValueChange,
  open,
  onOpenChange,
  helperText = "Select option...",
  placeholder = "Search option...",
}) => {
  return (
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between hover:data-[state=open]:bg-sage-3"
        >
          {value
            ? options.find((framework) => framework.value === value)?.label ??
              "New one"
            : helperText}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} className="focus:bg-sage-1" />
          <CommandEmpty className="p-0">
            <div className="p-1">
              <Button
                variant="ghost"
                className="h-8 w-full justify-start pl-2 font-normal"
                onClick={() => {
                  onValueChange("new");
                  onOpenChange(false);
                }}
              >
                <Plus className="mr-2 h-4 w-4" />
                Create new!
              </Button>
            </div>
          </CommandEmpty>
          <CommandGroup>
            <CommandItem
              onSelect={() => {
                onValueChange("new");
                onOpenChange(false);
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Create new!
            </CommandItem>
            {options.map((framework) => (
              <CommandItem
                key={framework.value}
                onSelect={(currentValue) => {
                  onValueChange(currentValue === value ? "" : currentValue);
                  onOpenChange(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
