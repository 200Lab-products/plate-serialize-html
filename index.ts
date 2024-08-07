import { NodeData, NodeFactory } from "./src/core/base-node";
import { data } from "./test";

const nodes = data.map(node => NodeFactory.getNode(node as NodeData));

const html = nodes.map(n => n.toHTML()).join(' ');

console.log(html);
