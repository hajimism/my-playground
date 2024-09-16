import { NextResponse } from "next/server";

import { sleep } from "@/app/api/mock/util";

import { JOB_LIST_MOCK } from "../data";

export async function GET() {
  await sleep(3);
  return NextResponse.json([...JOB_LIST_MOCK]);
}
