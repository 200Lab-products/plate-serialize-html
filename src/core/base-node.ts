abstract class BaseNode {
  private attributeProps: Record<string, string> = {};
  private children: BaseNode[] = [];

  protected constructor() { }

  abstract tagName(): string;

  private attPropsToString(): string {
    const dict = this.attributeProps;
    let s = '';

    for (let k in dict) {
      s += ` ${k}="${dict[k]}"`;
    }

    return s;
  }

  protected setChildren(nodes: BaseNode[]) { this.children = nodes; }

  setAttribute(key: string, value: string) {
    this.attributeProps[key] = value;
  }

  toHTML(): string {
    if (this.tagName() !== '')
      return `<${this.tagName()}${this.attPropsToString()}>${this.children.map(n => n.toHTML()).join('')}</${this.tagName()}>`;

    return this.children.map(n => n.toHTML()).join('');
  }
}

// Has children nodes
class ContainerNode extends BaseNode {
  protected constructor(private readonly tag: string) {
    super();
  }

  static getNode(tag: string) {
    return new ContainerNode(tag);
  }

  withChildren(nodes: BaseNode[]) {
    this.setChildren(nodes);
    return this;
  }

  tagName(): string {
    return this.tag;
  }
}

// No children node
class LeafNode extends BaseNode {
  constructor(private readonly tag: string) { super(); }

  tagName(): string { return this.tag; }
}

class TextNode extends LeafNode {
  private constructor(readonly text: string = '') { super(''); }

  static getNode(text: string): BaseNode {
    return new TextNode(text);
  }

  toHTML(): string {
    return this.text;
  }
}

class ImageNode extends LeafNode {
  constructor(private readonly src: string) {
    super('img');
    super.setAttribute('src', src);
  }
}

class CodeBlockNode extends ContainerNode {
  private constructor() {
    super('pre');
  }

  static getCodeNode(lang: string, childrenData: NodeChildData): BaseNode {
    const node = new CodeBlockNode();

    let codeNode = ContainerNode.getNode('code');
    codeNode.setAttribute('lang', `langage-${lang}`);

    let children: BaseNode[] = [];

    childrenData.children!.forEach(nd => {
      const texts = nd.children?.map(c => c.text);
      children = [...children, TextNode.getNode(texts?.join("\n") || '')];
    });


    codeNode = codeNode.withChildren(children);

    node.setChildren([codeNode]);

    return node;

  }
}


export type NodeData = {
  type: string;
  indent?: string;
  url?: string;
  children?: NodeChildData[];
  listStyleType?: string;
  lang?: string;
};

export type NodeChildData = {
  text?: string;
  bold?: boolean;
  code?: boolean;
  children?: NodeChildData[];
};


export class NodeFactory {
  static getNode(node: NodeData): BaseNode {
    const tagName = node.type;
    const hasChild = node.children && node.children.length > 0;

    if (tagName === 'img') {
      return new ImageNode(node.url || '');
    }

    if (tagName === 'code_block') {
      console.log(node.lang);
      return CodeBlockNode.getCodeNode(node.lang || 'text', node);
    }

    if (hasChild) {
      const childrenNodes = node.children!.map(child => {
        const { text = '', bold = false, code = false } = child;
        let resultNode = TextNode.getNode(text);

        if (bold) {
          resultNode = ContainerNode.getNode('strong').withChildren([resultNode]);
        }

        if (code) {
          resultNode = ContainerNode.getNode('code').withChildren([resultNode]);
        }

        return resultNode;
      });

      return ContainerNode.getNode(tagName).withChildren(childrenNodes);
    }
    return TextNode.getNode('');
  }
}

