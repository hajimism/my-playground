/**
 * ref: https://craft.mxkaske.dev/post/fancy-multi-select
 */

"use client";

import { Command as CommandPrimitive } from "cmdk";
import { X } from "lucide-react";
import {
  useRef,
  useState,
  useCallback,
  KeyboardEvent,
  FC,
  MouseEventHandler,
} from "react";

import { Badge } from "@/components/ui/badge";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";

import { Item } from "./type";

type Props = {
  items: Item[];
  placeholder?: string;
};

export const MultiSelect: FC<Props> = ({
  items,
  placeholder = "Select items...",
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Item[]>([]);
  const [inputValue, setInputValue] = useState("");

  const createNew = () => {
    const newItem = { value: inputValue, label: inputValue };
    handleSelect(newItem);
  };

  const handleSelect = useCallback((item: Item) => {
    setInputValue("");
    setSelected((prev) => [...prev, item]);
  }, []);

  const handleUnselect = useCallback((item: Item) => {
    setSelected((prev) => prev.filter((s) => s.value !== item.value));
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
    const input = inputRef.current;
    if (input) {
      if (e.key === "Delete" || e.key === "Backspace") {
        if (input.value === "") {
          setSelected((prev) => {
            const newSelected = [...prev];
            newSelected.pop();
            return newSelected;
          });
        }
      }
      // This is not a default behaviour of the <input /> field
      if (e.key === "Escape") {
        input.blur();
      }
    }
  }, []);

  const haltEvent: MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const selectables = items.filter((item) => !selected.includes(item));

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent"
    >
      <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {selected.map((item) => {
            return (
              <Badge key={item.value} variant="secondary">
                {item.label}
                <button
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(item);
                    }
                  }}
                  onMouseDown={haltEvent}
                  onClick={() => handleUnselect(item)}
                >
                  <X className="h-3 w-3 text-secondary-foreground transition-colors hover:text-muted-foreground" />
                </button>
              </Badge>
            );
          })}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open && selectables.length > 0 && (
          <div className="absolute top-0 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
            <CommandGroup className="h-full overflow-auto">
              {selectables.map((item) => {
                return (
                  <CommandItem
                    key={item.value}
                    onSelect={() => handleSelect(item)}
                    onMouseDown={haltEvent}
                  >
                    {item.label}
                  </CommandItem>
                );
              })}
              {inputValue && (
                <CommandItem
                  key="new"
                  onSelect={createNew}
                  onMouseDown={haltEvent}
                >
                  Create {inputValue}!
                </CommandItem>
              )}
            </CommandGroup>
          </div>
        )}
      </div>
    </Command>
  );
};
