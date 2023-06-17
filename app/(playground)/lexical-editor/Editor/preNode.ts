import { $createParagraphNode, $getRoot } from "lexical";

import { $createToggleContainerNode } from "./plugins/toggle/container";
import { $createToggleContentNode } from "./plugins/toggle/content";
import { $createToggleTitleNode } from "./plugins/toggle/title";

export const preNode = () => {
  const root = $getRoot();
  if (root.getFirstChild() === null) {
    const title = $createToggleTitleNode();
    const content = $createToggleContentNode().append($createParagraphNode());
    const container = $createToggleContainerNode(true).append(title, content);
    root.append(container);
  }
};
