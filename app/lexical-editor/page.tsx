import { H1 } from "@/components/ui/Typography";

import { Editor } from "./Editor";

export default function Page() {
  return (
    <div className="mx-auto p-12 min-h-screen">
      <H1>Lexical Editor</H1>
      <Editor />
    </div>
  );
}
