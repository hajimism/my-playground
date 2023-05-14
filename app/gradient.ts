import { cn } from "@/lib/utils";

export const GRADIENT = "from-blue-10 via-cyan-10 to-green-10";
export const TEXT_GRADIENT = cn(
  "text-transparent bg-clip-text bg-gradient-to-r",
  GRADIENT
);
