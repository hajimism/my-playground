import "./styles.css";
import {
  $createParagraphNode,
  $isElementNode,
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  EditorConfig,
  ElementNode,
  LexicalEditor,
  LexicalNode,
  RangeSelection,
  SerializedElementNode,
  Spread,
} from "lexical";

import { $isToggleContainerNode } from "./container";
import { $isToggleContentNode } from "./content";

type SerializedToggleTitleNode = Spread<
  {
    type: "toggle-title";
    version: 1;
  },
  SerializedElementNode
>;

export function convertSummaryElement(
  _domNode: HTMLElement
): DOMConversionOutput | null {
  const node = $createToggleTitleNode();
  return {
    node,
  };
}

export class ToggleTitleNode extends ElementNode {
  static override getType(): string {
    return "toggle-title";
  }

  static override clone(node: ToggleTitleNode): ToggleTitleNode {
    return new ToggleTitleNode(node.__key);
  }

  override createDOM(
    _config: EditorConfig,
    _editor: LexicalEditor
  ): HTMLElement {
    const dom = document.createElement("summary");
    const classNames = [
      "toggleMark",
      "cursor-pointer",
      "p-2",
      "pl-5",
      "relative",
      "font-bold",
      "list-none",
      "outline-none",
      "marker:hidden",
    ];
    dom.classList.add(...classNames);
    return dom;
  }

  override updateDOM(_prevNode: ToggleTitleNode, _dom: HTMLElement): boolean {
    return false;
  }

  static importDOM(): DOMConversionMap | null {
    return {
      summary: (_domNode: HTMLElement) => {
        return {
          conversion: convertSummaryElement,
          priority: 1,
        };
      },
    };
  }

  static override importJSON(
    _serializedNode: SerializedToggleTitleNode
  ): ToggleTitleNode {
    return $createToggleTitleNode();
  }

  override exportDOM(): DOMExportOutput {
    const element = document.createElement("summary");
    return { element };
  }

  override exportJSON(): SerializedToggleTitleNode {
    return {
      ...super.exportJSON(),
      type: "toggle-title",
      version: 1,
    };
  }

  override collapseAtStart(_selection: RangeSelection): boolean {
    this.getParentOrThrow().insertBefore(this);
    return true;
  }

  override insertNewAfter(
    _: RangeSelection,
    restoreSelection = true
  ): ElementNode {
    const containerNode = this.getParentOrThrow();

    if (!$isToggleContainerNode(containerNode)) {
      throw new Error(
        "ToggleTitleNode expects to be child of ToggleContainerNode"
      );
    }

    if (containerNode.getOpen()) {
      const contentNode = this.getNextSibling();
      if (!$isToggleContentNode(contentNode)) {
        throw new Error(
          "ToggleTitleNode expects to have ToggleContentNode sibling"
        );
      }

      const firstChild = contentNode.getFirstChild();
      if ($isElementNode(firstChild)) {
        return firstChild;
      } else {
        const paragraph = $createParagraphNode();
        contentNode.append(paragraph);
        return paragraph;
      }
    } else {
      const paragraph = $createParagraphNode();
      containerNode.insertAfter(paragraph, restoreSelection);
      return paragraph;
    }
  }
}

export function $createToggleTitleNode(): ToggleTitleNode {
  return new ToggleTitleNode();
}

export function $isToggleTitleNode(
  node: LexicalNode | null | undefined
): node is ToggleTitleNode {
  return node instanceof ToggleTitleNode;
}
