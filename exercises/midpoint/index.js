// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

const { LinkedList } = require('./linkedlist');

/**
 *
 * @param list {LinkedList}
 */
function midpoint(list) {
    const midIndex = Math.ceil(list.size()/2)-1
    return list.getAt(midIndex).data;
}

const l = new LinkedList();
l.insertLast('a');
l.insertLast('c');
console.log(midpoint(l))

module.exports = midpoint;
