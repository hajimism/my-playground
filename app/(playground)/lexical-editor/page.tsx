import { H1 } from "@/components/ui/typography";

import { Editor } from "./Editor";

export default function Page() {
  return (
    <>
      <H1 className="my-8">Lexical Editor</H1>
      <Editor />
    </>
  );
}
