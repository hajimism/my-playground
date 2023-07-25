"use client";

import { atom, useAtom, useAtomValue } from "jotai";
import { ChangeEventHandler, useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const nameAtom = atom("");

export const NameInput = () => {
  const [name, setName] = useAtom(nameAtom);
  const id = useId();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setName(e.target.value);

  return (
    <div className="space-y-2">
      <Label className="text-lg font-bold" htmlFor={id}>
        名前
      </Label>
      <Input id={id} value={name} onChange={onChange} />
    </div>
  );
};

export const NamePreview = () => {
  const name = useAtomValue(nameAtom);

  return (
    <div className="space-y-2">
      <Label className="text-lg font-bold text-gray-11">名前</Label>
      <p className="shrink-0 truncate rounded-xl border-[3px] p-4 text-lg font-semibold">
        {name}
      </p>
    </div>
  );
};
