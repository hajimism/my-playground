"use client";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import LexicalClickableLinkPlugin from "@lexical/react/LexicalClickableLinkPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { TabIndentationPlugin } from "@lexical/react/LexicalTabIndentationPlugin";

import { nodes } from "./node";
import { AutoLinkPlugin } from "./plugins/auto-link";
import { CodeHighlightPlugin } from "./plugins/code-highlight";
import { ListMaxIndentLevelPlugin } from "./plugins/list-max-indent";
import { MarkdownPlugin } from "./plugins/markdown";
import { RichTextPlugin } from "./plugins/richtext";
import { TogglePlugin } from "./plugins/toggle";
import { theme } from "./theme";

const initialConfig = {
  namespace: "MyEditor",
  // editorState: preNode,
  theme,
  onError: (error: any) => console.error(error),
  nodes,
};

export function Editor() {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="relative rounded-md">
        <RichTextPlugin />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <MarkdownPlugin />
        <ListPlugin />
        <CheckListPlugin />
        <CodeHighlightPlugin />
        <AutoLinkPlugin />
        <LinkPlugin />
        <LexicalClickableLinkPlugin />
        <TabIndentationPlugin />
        <TogglePlugin />
        <ListMaxIndentLevelPlugin maxDepth={5} />
      </div>
    </LexicalComposer>
  );
}
