"use client";

import { ThemeProvider } from "next-themes";
import { FC, PropsWithChildren } from "react";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
