export const generateUlid = () => {
  // Base32 encoding characters
  const ENCODING_CHARS = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";

  // Generate timestamp part (48 bits)
  let timestamp = Date.now();
  let timestampPart = "";
  for (let i = 0; i < 10; i++) {
    timestampPart = ENCODING_CHARS.charAt(timestamp % 32) + timestampPart;
    timestamp = Math.floor(timestamp / 32);
  }

  // Generate random part (80 bits)
  let randomPart = "";
  for (let i = 0; i < 16; i++) {
    randomPart += ENCODING_CHARS.charAt(Math.floor(Math.random() * 32));
  }

  return timestampPart + randomPart;
};

export const getRandomElements = <T>(array: T[], count: number): T[] => {
  const shuffledArray = Array.from(array).sort(() => 0.5 - Math.random());
  return shuffledArray.slice(0, count);
};

export const JOB_CATEGORIES = [
  { id: generateUlid(), queryName: "android", displayName: "Android" },
  { id: generateUlid(), queryName: "ios", displayName: "iOS" },
  { id: generateUlid(), queryName: "front-end", displayName: "Front-end" },
  { id: generateUlid(), queryName: "back-end", displayName: "Back-end" },
  { id: generateUlid(), queryName: "ui-design", displayName: "UI Design" },
  {
    id: generateUlid(),
    queryName: "service-design",
    displayName: "Service Design",
  },
  { id: generateUlid(), queryName: "pm", displayName: "PM" },
  { id: generateUlid(), queryName: "sales", displayName: "Sales" },
];

type JobCategory = (typeof JOB_CATEGORIES)[number];
export type SkillTag = {
  id: string;
  name: string;
  iconUrl?: string;
};

export type Job = {
  id: string;
  title: string;
  thumbnail: string;
  clientName: string;
  jobCategory: JobCategory;
  tags: SkillTag[];
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date;
};

type Tag = Record<JobCategory["displayName"], string[]>;

const TAGS: Tag = {
  Android: ["Kotlin", "Java", "Android Studio", "Firebase"],
  iOS: ["Swift", "Objective-C", "Xcode", "iOS SDK"],
  Flutter: ["Android", "iOS", "Firebase"],
  "Front-end": ["React", "Vue", "Angular"],
  "Back-end": [
    "Node.js",
    "Python",
    "Java",
    "C#",
    "PHP",
    "Ruby",
    "Go",
    "SQL",
    "NoSQL",
  ],
  "UI Design": [
    "Sketch",
    "Figma",
    "Adobe XD",
    "Illustrator",
    "Photoshop",
    "InVision",
  ],
  "Service Design": [
    "UX Research",
    "Prototyping",
    "Wireframing",
    "User Testing",
    "Information Architecture",
  ],
  PM: [
    "Agile",
    "Scrum",
    "Kanban",
    "Project Planning",
    "Risk Management",
    "Stakeholder Management",
  ],
  Sales: [
    "Lead Generation",
    "Negotiation",
    "CRM",
    "Sales Strategy",
    "Communication",
  ],
};

const generateSomeTags = (category: JobCategory) => {
  // 職域に合わせた0~2個のタグを生成
  const max = 3;
  const randomNumber = Math.ceil(Math.random() * max) - 1;

  return getRandomElements(TAGS[category.displayName], randomNumber).map(
    (name) => ({
      id: generateUlid(),
      name,
      iconUrl: "/mock/skill_icon.png",
    })
  );
};

export const generateRandomJobMock = (i: number): Job => {
  const category = getRandomElements(JOB_CATEGORIES, 1)[0];
  if (category === undefined)
    throw new Error(
      "型パズルするのも大変なのでガードすることによりカバーしました"
    );

  const tags = generateSomeTags(category);

  // いくつか新着を織り交ぜたい
  const createdAt = i % 6 === 0 ? new Date() : new Date("2023/04/01");

  return {
    id: generateUlid(),
    title: "イケてる求人",
    clientName: "素敵なクライアント",
    thumbnail: "/mock/job_thumbnail.png",
    jobCategory: category,
    tags: tags,
    createdAt: createdAt,
    updatedAt: createdAt,
    expiresAt: new Date("2023/06/01"),
  };
};

const JOB_COUNT_PER_CATEGORY = 5;
const JOB_LIST_MOCK_LENGTH = JOB_CATEGORIES.length * JOB_COUNT_PER_CATEGORY;

export const JOB_LIST_MOCK: Job[] = [...Array(JOB_LIST_MOCK_LENGTH)]
  .map((_, i) => generateRandomJobMock(i))
  .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1)); // 新着をA
