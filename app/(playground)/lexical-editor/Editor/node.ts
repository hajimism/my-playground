import { CodeNode, CodeHighlightNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { ListNode, ListItemNode } from "@lexical/list";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { Klass, LexicalNode } from "lexical";

import {
  ToggleContainerNode,
  ToggleContentNode,
  ToggleTitleNode,
} from "./plugins/toggle";

export const nodes: Array<Klass<LexicalNode>> = [
  HeadingNode,
  ListNode,
  ListItemNode,
  QuoteNode,
  CodeNode,
  CodeHighlightNode,
  AutoLinkNode,
  LinkNode,
  ToggleContainerNode,
  ToggleContentNode,
  ToggleTitleNode,
];
