import { OgImage } from "./component";

export const runtime = "edge";

const DEFAULT_TEXT = "Play with me.";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get("text") ?? DEFAULT_TEXT;

  return OgImage(text);
}
