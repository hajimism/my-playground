"use client";

import { Link, Moon, Sun } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { FC, use, useCallback, useEffect, useState } from "react";

import { getLinks } from "./lib";
import { CommandView } from "./view";

import type { CommandGroup, Command } from "./type";

export const CommandPalette: FC = () => {
  const { links } = use(getLinks());
  const activateKey = "k";

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === activateKey && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [activateKey]);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  const linkCommands: Command[] = links.map((link) => ({
    label: link.path,
    icon: Link,
    action: () => runCommand(() => router.push(link.path)),
  }));

  const themeCommands: Command[] = [
    {
      label: "Light",
      icon: Sun,
      action: () => runCommand(() => setTheme("light")),
    },
    {
      label: "Dark",
      icon: Moon,
      action: () => runCommand(() => setTheme("dark")),
    },
  ];

  const commandGroups: CommandGroup[] = [
    { heading: "Link", commands: linkCommands },
    { heading: "Theme", commands: themeCommands },
  ];

  return (
    <CommandView
      open={open}
      onOpenChange={setOpen}
      commandGroups={commandGroups}
    />
  );
};
