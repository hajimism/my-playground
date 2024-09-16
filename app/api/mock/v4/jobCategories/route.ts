import { NextResponse } from "next/server";

import { sleep } from "@/app/api/mock/util";

import { JOB_CATEGORIES } from "../data";

export async function GET() {
  await sleep(1);
  return NextResponse.json([...JOB_CATEGORIES]);
}
