"use client";

import { atom, useAtom, useAtomValue } from "jotai";
import { ChangeEventHandler, useId } from "react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const commentAtom = atom(
  "とても素晴らしいコメントとても素晴らしいコメントとても素晴らしいコメントとても素晴らしいコメントとても素晴らしいコメントとても素晴らしいコメントとても素晴らしいコメント"
);

export const CommentInput = () => {
  const [comment, setcomment] = useAtom(commentAtom);
  const id = useId();

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setcomment(e.target.value);

  return (
    <div>
      <Label htmlFor={id}>コメント</Label>
      <Textarea id={id} value={comment} onChange={onChange} />
    </div>
  );
};

export const CommentPreview = () => {
  const comment = useAtomValue(commentAtom);

  return (
    <div className="space-y-2">
      <Label className="text-lg font-bold text-gray-11">コメント</Label>
      <p className="h-32 w-full overflow-hidden rounded-xl border-[3px] p-4 text-lg font-semibold">
        {comment}
      </p>
    </div>
  );
};
