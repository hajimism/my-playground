export type JobCategory =
  | "Android"
  | "iOS"
  | "Flutter"
  | "Front-end"
  | "Back-end"
  | "UI Design"
  | "Service Design"
  | "PM"
  | "Sales";

export type SkillTag = {
  id: string;
  name: string;
  iconUrl?: string;
};

export type Job = {
  id: string;
  title: string;
  thumbnail: string;
  client_name: string;
  job_category: JobCategory;
  tags: SkillTag[];
  created_at: Date;
  updated_at: Date;
  expires_at: Date;
};

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

export const JOB_CATEGORIES: JobCategory[] = [
  "Android",
  "iOS",
  "Flutter",
  "Front-end",
  "Back-end",
  "UI Design",
  "Service Design",
  "PM",
  "Sales",
];

type Tag = Record<JobCategory, string[]>;

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

  return getRandomElements(TAGS[category], randomNumber).map((name) => ({
    id: generateUlid(),
    name,
    iconUrl: "/mock/skill_icon.png",
  }));
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
    thumbnail: "/mock/job_thumbnail.png",
    job_category: category,
    tags: tags,
    created_at: createdAt,
    updated_at: createdAt,
    client_name: "素敵なクライアント",
    expires_at: new Date("2023/06/01"),
  };
};

const JOB_COUNT_PER_CATEGORY = 5;
const JOB_LIST_MOCK_LENGTH = JOB_CATEGORIES.length * JOB_COUNT_PER_CATEGORY;

export const JOB_LIST_MOCK: Job[] = [...Array(JOB_LIST_MOCK_LENGTH)]
  .map((_, i) => generateRandomJobMock(i))
  .sort((a, b) => (a.created_at > b.created_at ? -1 : 1)); // 新着を前に
