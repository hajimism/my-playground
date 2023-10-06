"use client";

import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useId } from "react";
import { useInView } from "react-intersection-observer";

import { cn } from "@/lib/utils";

import { isReadAllAtom } from "./atom";

export const End = () => {
  const setAtom = useSetAtom(isReadAllAtom);
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) setAtom(true);
  }, [inView, setAtom]);

  return <div ref={ref} />;
};

export const Confirmation = () => {
  const isReadAll = useAtomValue(isReadAllAtom);
  const id = useId();

  const disabled = !isReadAll;

  return (
    <div className="flex items-center gap-2">
      <input id={id} type="checkbox" disabled={disabled} />
      <label htmlFor={id} className={cn(disabled && "text-slate-400")}>
        利用規約に同意する
      </label>
    </div>
  );
};
