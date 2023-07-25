"use client";

import { atom, useAtom, useAtomValue } from "jotai";
import { ChangeEventHandler, useId } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const occupationAtom = atom("");

export const OccupationInput = () => {
  const [occupation, setOccupation] = useAtom(occupationAtom);
  const id = useId();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setOccupation(e.target.value);

  return (
    <div className="space-y-2">
      <Label className="text-lg font-bold" htmlFor={id}>
        職種
      </Label>
      <Input
        placeholder="おもしろデザイナー"
        id={id}
        value={occupation}
        onChange={onChange}
      />
    </div>
  );
};

export const OccupationPreview = () => {
  const occupation = useAtomValue(occupationAtom);

  return (
    <div className="space-y-2">
      <Label className="text-lg font-bold text-gray-11">職種</Label>
      <p className="truncate rounded-xl border-[3px] p-4 text-lg font-semibold">
        {occupation}
      </p>
    </div>
  );
};
