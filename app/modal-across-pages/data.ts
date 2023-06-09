export const JOB_CATEGORIES = [
  { queryName: "mobile", displayName: "Mobile" },
  { queryName: "front-end", displayName: "Front-end" },
  { queryName: "back-end", displayName: "Back-end" },
  { queryName: "design", displayName: "Design" },
  { queryName: "pm", displayName: "PM" },
  { queryName: "sales", displayName: "Sales" },
] as const;

export type JobCategory = (typeof JOB_CATEGORIES)[number];
export type JobCategoryQueryName = JobCategory["queryName"];
export type JobCategoryDisplayName = JobCategory["displayName"];
