import { generateUlid } from "../data";

type Category = {
  id: string;
  queryName: string;
  displayName: string;
};

export const JOB_CATEGORIES: Category[] = [
  {
    id: generateUlid(),
    queryName: "android",
    displayName: "Android",
  },
  {
    id: generateUlid(),
    queryName: "ios",
    displayName: "iOS",
  },
  {
    id: generateUlid(),
    queryName: "flutter",
    displayName: "Flutter",
  },
  {
    id: generateUlid(),
    queryName: "front-end",
    displayName: "Front-end",
  },
  {
    id: generateUlid(),
    queryName: "back-end",
    displayName: "Back-end",
  },
  {
    id: generateUlid(),
    queryName: "ui-design",
    displayName: "UI Design",
  },
  {
    id: generateUlid(),
    queryName: "service-design",
    displayName: "Service Design",
  },
  {
    id: generateUlid(),
    queryName: "pm",
    displayName: "PM",
  },
  {
    id: generateUlid(),
    queryName: "sales",
    displayName: "Sales",
  },
];
