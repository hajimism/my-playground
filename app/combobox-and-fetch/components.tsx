"use client";

import { useState, FC } from "react";
import useSWR from "swr";

import { Combobox } from "@/components/ui/Combobox";
import { Input } from "@/components/ui/Input";
import { Skeleton } from "@/components/ui/Skeleton";
import { Textarea } from "@/components/ui/Textarea";
import { H1, P } from "@/components/ui/Typography";

const endpoint =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/combobox-and-fetch"
    : `/combobox-and-fetch`;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const View = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { data, isLoading } = useSWR(`${endpoint}/options`, fetcher);

  const isInit = value === "";
  const isNewItem = value === "new";

  if (isLoading) return <P>loading...</P>;

  const options = data.options;

  return (
    <>
      <Combobox
        options={options}
        open={open}
        onOpenChange={setOpen}
        value={value}
        onValueChange={setValue}
      />
      {isInit ? <></> : isNewItem ? <NewItem /> : <Detail value={value} />}
    </>
  );
};

const NewItem = () => {
  return (
    <div>
      <Input placeholder="title" />
      <Textarea placeholder="description" className="mt-4" />
    </div>
  );
};

const Detail: FC<{ value: string }> = ({ value }) => {
  const { data, isLoading } = useSWR(
    `${endpoint}/detail?value=${value}`,
    fetcher
  );

  if (isLoading) return <DetailSkeleton />;

  const detail = data.detail;
  return (
    <div>
      <H1 className="h-16 py-3">{detail.label}</H1>
      <P>{detail.description}</P>
    </div>
  );
};

const DetailSkeleton = () => {
  return (
    <div>
      <Skeleton className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-sage-12 h-16 py-3" />
      <Skeleton className="h-8 [&:not(:first-child)]:mt-6" />
    </div>
  );
};
