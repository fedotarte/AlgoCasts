// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
//       / |
//      6  7
// Answer: [1, 3, 2, 2]


const Node = require('./node');

/**
 *
 * @param root {Node}
 */
function levelWidth(root) {
    const levelDataMap = new Map();

    const handleMap = (level) => {
        if(levelDataMap.has(level)){
            levelDataMap.set(level, levelDataMap.get(level)+1);
        } else {
            levelDataMap.set(level, 1);
        }
    }

    const traverse = (node, level) => {
        handleMap(level);
        if(node.children?.length)
        {
          node.children.forEach((child) => traverse(child, level+1));
        }
    };

    traverse(root, 0);


    return Array.from(levelDataMap.values());

}

const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);
root.children[2].children[0].add(6);
root.children[2].children[0].add(7);

levelWidth(root);

module.exports = levelWidth;
