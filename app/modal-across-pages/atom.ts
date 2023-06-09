import { atom } from "jotai";

import { JobCategoryQueryName } from "./data";

const selectedJobCategoriesAtom = atom<JobCategoryQueryName[]>([]);
const newlyOpenJobsAtom = atom<JobCategoryQueryName[]>([]);

export { selectedJobCategoriesAtom, newlyOpenJobsAtom };
