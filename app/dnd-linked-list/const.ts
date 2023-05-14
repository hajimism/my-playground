export const OCCUPATIONS = [
  "Android",
  "iOS",
  "Front-end",
  "Back-end",
  "UI Design",
  "Service Design",
] as const;

const JOB_TEMPLATES = [
  {
    emoji: "🔥",
    title: "炎上案件",
  },
  {
    emoji: "💪",
    title: "がんばるぞ案件",
  },
  {
    emoji: "🤩",
    title: "おいしい案件",
  },
];

export const JOBS = [...Array(36)].map((_, i) => {
  return {
    id: i,
    ...JOB_TEMPLATES[(i % 5) % 3],
    tag: OCCUPATIONS[i % 6],
  };
});
