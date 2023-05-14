import { ThemeSwitcher } from "@/components/functional/ThemeSwitcher";
import { H1 } from "@/components/ui/Typography";

import { TEXT_GRADIENT } from "@/app/gradient";

import { cn } from "@/lib/utils";

import { PageTable } from "./component";

export default function Home() {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex justify-between items-center">
        <H1 className={cn("py-1", TEXT_GRADIENT)}>
          {"Playground of "}
          <a href="https://github.com/hajimism" target="_blank" rel="noopener">
            hajimism
          </a>
        </H1>
        <ThemeSwitcher />
      </div>
      <PageTable />
    </div>
  );
}
