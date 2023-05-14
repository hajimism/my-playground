"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/ui/Skeleton";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const themeIsLight = theme === "light";

  const toggleTheme = () => {
    const oppositeTheme = themeIsLight ? "dark" : "light";
    setTheme(oppositeTheme);
  };

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton role="status" className="h-10 w-12 rounded" />;
  }

  return (
    <Button
      onClick={toggleTheme}
      size={"sm"}
      variant={"ghost"}
      className="w-9 px-0"
    >
      {themeIsLight ? (
        <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
