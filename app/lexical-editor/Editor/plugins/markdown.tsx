import { TRANSFORMERS } from "@lexical/markdown";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";

export const MarkdownPlugin = () => (
  <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
);
