import { Sun, Moon, Link } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useState, useCallback, useEffect } from "react";

import { LINKS } from "../links";

import type { Command, CommandGroup } from "./type";

export const useToggleCommandWithKey = (activateKey = "k") => {
  const [open, setOpen] = useState(false);

  // Close Command when running a command
  const runCommand = useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

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

  return { open, setOpen, runCommand };
};

export const usePageCommandGroup = (): CommandGroup => {
  const router = useRouter();

  const pageCommands: Command[] = LINKS.map((link) => ({
    label: link.path,
    icon: Link,
    action: () => router.push(link.path),
  }));

  return { heading: "職種別の求人", commands: pageCommands };
};

export const useThemeCommandGroup = (): CommandGroup => {
  const { setTheme } = useTheme();

  const themeCommands = [
    {
      label: "Light",
      icon: Sun,
      action: () => setTheme("light"),
    },
    {
      label: "Dark",
      icon: Moon,
      action: () => setTheme("dark"),
    },
  ];

  return { heading: "Theme", commands: themeCommands };
};
