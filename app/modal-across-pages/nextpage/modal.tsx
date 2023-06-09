"use client";

import { useAtom } from "jotai";

import { Button } from "@/components/ui/Button";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/Dialog";

import { newlyOpenJobsAtom } from "../atom";
import { JobCategoryQueryName, JOB_CATEGORIES } from "../data";

export const Modal = () => {
  const [newlyOpenJobs, set] = useAtom(newlyOpenJobsAtom);
  const thereAreNewlyOpenJobs = newlyOpenJobs.length > 0;

  const clear = () => set([]);
  const onCancel = () => clear();
  const onSubmit = () => clear();
  return (
    <Dialog open={thereAreNewlyOpenJobs}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            新しく公開された求人をSlackでお知らせしますか？
          </DialogTitle>
          <DialogDescription>
            <ul className="flex flex-col gap-2 py-4">
              {newlyOpenJobs.map((item: JobCategoryQueryName) => (
                <li key={item}>
                  <input type="checkbox" defaultChecked id={item} />
                  <label htmlFor={item}>
                    {
                      JOB_CATEGORIES.find((c) => c.queryName === item)
                        ?.displayName
                    }
                  </label>
                </li>
              ))}
            </ul>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={onSubmit}>知らせる</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
