"use client";

import { useAtom } from "jotai";
import { useState } from "react";

import { H1 } from "@/components/ui/typography";

import { flameworksAtom } from "./atom";
import { MultiSelect } from "./component";
import { FRAMEWORKS } from "./data";
import { useMultiSelect } from "./hook";
import { Item } from "./type";

export default function Page() {
  const [MultiFlameworksSelect, _item] = useMultiSelect(FRAMEWORKS);
  const [flameworks, setFlameWorks] = useAtom(flameworksAtom);
  const onCreateNew = (newItem: Item) =>
    setFlameWorks((current) => [...current, newItem]);
  const [selected, setSelected] = useState<Item[]>([]);

  return (
    <div className="flex flex-col gap-40">
      <div className="flex flex-col gap-6">
        <H1>Hooks</H1>
        <MultiFlameworksSelect />
      </div>

      <div className="flex flex-col gap-6">
        <H1>With Jotai</H1>
        <MultiSelect
          selected={selected}
          setSelected={setSelected}
          items={flameworks}
          onCreateNew={onCreateNew}
        />
      </div>
    </div>
  );
}
