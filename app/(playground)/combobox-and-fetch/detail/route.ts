import { NextResponse } from "next/server";

import { DATA } from "../data";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const value = searchParams.get("value");

  const detail = DATA.find((item) => item.value === value);

  return NextResponse.json({ detail });
}
