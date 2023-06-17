import {
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  EditorConfig,
  ElementNode,
  LexicalNode,
  SerializedElementNode,
  Spread,
} from "lexical";

type SerializedToggleContentNode = Spread<
  {
    type: "toggle-content";
    version: 1;
  },
  SerializedElementNode
>;

export function convertToggleContentElement(
  _domNode: HTMLElement
): DOMConversionOutput | null {
  const node = $createToggleContentNode();
  return {
    node,
  };
}

export class ToggleContentNode extends ElementNode {
  static override getType(): string {
    return "toggle-content";
  }

  static override clone(node: ToggleContentNode): ToggleContentNode {
    return new ToggleContentNode(node.__key);
  }

  override createDOM(_config: EditorConfig): HTMLElement {
    const dom = document.createElement("div");
    const classNames = ["pr-4", "pl-5"];
    dom.classList.add(...classNames);
    return dom;
  }

  override updateDOM(_prevNode: ToggleContentNode, _dom: HTMLElement): boolean {
    return false;
  }

  static importDOM(): DOMConversionMap | null {
    return {
      div: (domNode: HTMLElement) => {
        if (!domNode.hasAttribute("data-lexical-collapsible-content")) {
          return null;
        }
        return {
          conversion: convertToggleContentElement,
          priority: 2,
        };
      },
    };
  }

  override exportDOM(): DOMExportOutput {
    const element = document.createElement("div");
    element.setAttribute("data-lexical-collapsible-content", "true");
    return { element };
  }

  static override importJSON(
    _serializedNode: SerializedToggleContentNode
  ): ToggleContentNode {
    return $createToggleContentNode();
  }

  override isShadowRoot(): boolean {
    return true;
  }

  override exportJSON(): SerializedToggleContentNode {
    return {
      ...super.exportJSON(),
      type: "toggle-content",
      version: 1,
    };
  }
}

export function $createToggleContentNode(): ToggleContentNode {
  return new ToggleContentNode();
}

export function $isToggleContentNode(
  node: LexicalNode | null | undefined
): node is ToggleContentNode {
  return node instanceof ToggleContentNode;
}
