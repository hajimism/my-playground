"use client";

import { Confirmation, End } from "./components";

const superLongSentense = "ものすごく長い利用規約".repeat(100);

export default function Page() {
  return (
    <div>
      <div className="h-96 w-40 overflow-scroll bg-slate-2 p-4">
        {superLongSentense}
        <End />
      </div>
      <Confirmation />
    </div>
  );
}
