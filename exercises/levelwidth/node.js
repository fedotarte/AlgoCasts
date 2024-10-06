class Node {
  constructor(data){
    this.data = data;
    this.children = []
  }

  add(data){
    this.children.push(new Node(data))
  }
}

/**
 * @param node {Node}
 * @return {number[]}, where index is the level and number is the size of level
 */

let node = new Node(1);
node.add(2);
node.add(3);
node.add(4);
node.children[0].add(5);
node.children[1].add(6);
node.children[2].add(7);
node.children[1].children[0].add(8);
node.children[1].children[0].add(9);

let levelwidth = (node) => {
  let map = new Map();

  /**
   *
   * @param currentNode {Node}
   * @param level {number}
   */
  const traverse = (currentNode, level) => {
    if(map.has(level)){
      const currentLevelSize = map.get(level);
      map.set(level, currentLevelSize+1);
    } else {
      map.set(level, 1)
    }
    currentNode.children?.forEach((child) => traverse(child, level+1));
  }

  traverse(node, 1);

  const result = [...map.values()];

  map = null;

  return result;
}


const width = levelwidth(node);

levelwidth = null;
node = null;

console.log(width)