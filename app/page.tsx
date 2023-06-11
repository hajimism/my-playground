import { H1 } from "@/components/ui/typography";

import { TEXT_GRADIENT } from "@/app/gradient";

import { cn } from "@/lib/utils";

import { PageTable } from "./component";

export default function Home() {
  return (
    <>
      <div className="flex">
        <H1 className={cn("mt-8 pb-1", TEXT_GRADIENT)}>Play with me.</H1>
      </div>
      <PageTable />
    </>
  );
}
