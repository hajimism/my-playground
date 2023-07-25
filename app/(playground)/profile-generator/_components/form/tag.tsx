"use client";
import { atom, useAtom, useAtomValue } from "jotai";

import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";

import { MultiSelect } from "@/app/(playground)/notion-like-multi-select/component";
import { Item } from "@/app/(playground)/notion-like-multi-select/type";

const tagsAtom = atom<Item[]>([
  {
    value: "chihou",
    label: "地方在住",
  },
  {
    value: "25grad",
    label: "25卒",
  },
  {
    value: "26grad",
    label: "26卒",
  },
]);

const selectedTagsAtom = atom<Item[]>([
  {
    value: "chihou",
    label: "地方在住",
  },
  {
    value: "25grad",
    label: "25卒",
  },
  {
    value: "chihou",
    label: "地方在住",
  },
  {
    value: "25grad",
    label: "25卒",
  },
  {
    value: "chihou",
    label: "地方在住",
  },
  {
    value: "25grad",
    label: "25卒",
  },
  {
    value: "chihou",
    label: "地方在住",
  },
  {
    value: "25grad",
    label: "25卒",
  },
]);

export const TagInput = () => {
  const [tags, setTags] = useAtom(tagsAtom);
  const [selectedTags, setSelectedTags] = useAtom(selectedTagsAtom);
  const onCreateNew = (newItem: Item) =>
    setTags((current) => [...current, newItem]);

  return (
    <div>
      <Label>タグ</Label>
      <MultiSelect
        items={tags}
        onCreateNew={onCreateNew}
        selected={selectedTags}
        setSelected={setSelectedTags}
      />
    </div>
  );
};

export const TagPreview = () => {
  const tags = useAtomValue(selectedTagsAtom);
  return (
    <div className="space-y-2">
      <Label className="text-lg font-bold text-gray-11">タグ</Label>
      <ul className="flex w-full gap-2 overflow-scroll rounded-xl border-[3px] px-4 py-2.5">
        {tags.map((tag) => (
          <li key={tag.value} className="shrink-0">
            <Badge className="bg-blue-11 px-4 py-2.5 text-white hover:bg-blue-10">
              {tag.label}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};
