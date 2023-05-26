import { NextResponse } from "next/server";

import { DATA } from "../data";

export const runtime = "edge";

const options = DATA.map(({ value, label }) => ({ value, label }));

export function GET() {
  return NextResponse.json({ options });
}
