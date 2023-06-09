"use client";

import { useAtom, useSetAtom } from "jotai";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler } from "react";

import { Button } from "@/components/ui/Button";
import { P } from "@/components/ui/Typography";

import { newlyOpenJobsAtom, selectedJobCategoriesAtom } from "./atom";
import { JOB_CATEGORIES, JobCategoryQueryName } from "./data";

const postData = async (data: any) => {
  const response = await fetch("/modal-across-pages/api", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export default function Page() {
  const router = useRouter();
  const [selected, setSelected] = useAtom(selectedJobCategoriesAtom);
  const openJobs = useSetAtom(newlyOpenJobsAtom);

  const clearSelected = () => setSelected([]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const targetCategory = e.target.id as JobCategoryQueryName;
    if (e.target.checked) {
      setSelected((current) => [...current, targetCategory]);
    } else {
      setSelected((current) =>
        current.filter((item) => item !== targetCategory)
      );
    }
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const { res } = await postData({ data: selected });

    openJobs(res.data);
    clearSelected();
    router.push("/modal-across-pages/nextpage");
  };

  return (
    <form onSubmit={onSubmit}>
      <ul className="grid grid-cols-3">
        {JOB_CATEGORIES.map(({ queryName, displayName }) => (
          <li key={queryName}>
            <input
              type="checkbox"
              checked={selected.includes(queryName)}
              id={queryName}
              onChange={handleChange}
            />
            <label htmlFor={queryName}>{displayName}</label>
          </li>
        ))}
      </ul>
      <P>selected items: {selected.join(", ")}</P>

      <Button>Submit</Button>
    </form>
  );
}
