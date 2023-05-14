import {
  DOMConversionMap,
  DOMConversionOutput,
  DOMExportOutput,
  EditorConfig,
  ElementNode,
  LexicalEditor,
  LexicalNode,
  NodeKey,
  SerializedElementNode,
  Spread,
} from "lexical";

type SerializedToggleContainerNode = Spread<
  {
    open: boolean;
    type: "toggle-container";
    version: 1;
  },
  SerializedElementNode
>;

export function convertDetailsElement(
  domNode: HTMLDetailsElement
): DOMConversionOutput | null {
  const isOpen = domNode.open !== undefined ? domNode.open : true;
  const node = $createToggleContainerNode(isOpen);
  return {
    node,
  };
}

export class ToggleContainerNode extends ElementNode {
  __open: boolean;

  constructor(open: boolean, key?: NodeKey) {
    super(key);
    this.__open = open;
  }

  static getType(): string {
    return "toggle-container";
  }

  static clone(node: ToggleContainerNode): ToggleContainerNode {
    return new ToggleContainerNode(node.__open, node.__key);
  }

  createDOM(_config: EditorConfig, editor: LexicalEditor): HTMLElement {
    const dom = document.createElement("details");
    const classNames = [
      "container",
      "mb-2",
      "bg-sage-2",
      "border",
      "border-sage-3",
      "rounded",
    ];
    dom.classList.add(...classNames);
    dom.open = this.__open;
    dom.addEventListener("toggle", () => {
      const open = editor.getEditorState().read(() => this.getOpen());
      if (open !== dom.open) {
        editor.update(() => this.toggleOpen());
      }
    });
    return dom;
  }

  updateDOM(prevNode: ToggleContainerNode, dom: HTMLDetailsElement): boolean {
    if (prevNode.__open !== this.__open) {
      dom.open = this.__open;
    }

    return false;
  }

  static importDOM(): DOMConversionMap<HTMLDetailsElement> | null {
    return {
      details: (_domNode: HTMLDetailsElement) => {
        return {
          conversion: convertDetailsElement,
          priority: 1,
        };
      },
    };
  }

  static importJSON(
    serializedNode: SerializedToggleContainerNode
  ): ToggleContainerNode {
    const node = $createToggleContainerNode(serializedNode.open);
    return node;
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement("details");
    element.setAttribute("open", this.__open.toString());
    return { element };
  }

  exportJSON(): SerializedToggleContainerNode {
    return {
      ...super.exportJSON(),
      open: this.__open,
      type: "toggle-container",
      version: 1,
    };
  }

  setOpen(open: boolean): void {
    const writable = this.getWritable();
    writable.__open = open;
  }

  getOpen(): boolean {
    return this.getLatest().__open;
  }

  toggleOpen(): void {
    this.setOpen(!this.getOpen());
  }
}

export function $createToggleContainerNode(
  isOpen: boolean
): ToggleContainerNode {
  return new ToggleContainerNode(isOpen);
}

export function $isToggleContainerNode(
  node: LexicalNode | null | undefined
): node is ToggleContainerNode {
  return node instanceof ToggleContainerNode;
}
