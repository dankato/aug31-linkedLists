'use strict';

// --- Exercise 1 ------

// Initialization
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  // Insertion
  insert(nthPosition, value) {
    if (nthPosition < 0 || nthPosition > this.length) {
      throw new Error('nthPosition error');
    }
    const newNode = {
      value
    };
    if (nthPosition === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const node = this._find(nthPosition - 1);
      newNode.next = node.next;
      node.next = newNode;
    }
    this.length++;
  }
  _find(nthPosition) {
    let node = this.head;
    for (let i = 0; i < nthPosition; i++) {
      node = node.next;
    }
    return node;
  }

  // Retrieval
  get(nthPosition) {
    if (nthPosition < 0 || nthPosition >= this.length) {
      throw new Error('Index error');
    }
    return this._find(nthPosition).value;
  }

  // Removal
  remove(nthPosition) {
    if (nthPosition < 0 || nthPosition >= this.length) {
      throw new Error('Index error');
    }
    if (nthPosition === 0) {
      this.head = this.head.next;
    } else {
      const node = this._find(nthPosition - 1);
      node.next = node.next.next;
    }
    this.length--;
  }
}
const list = new LinkedList();
const secondList = new LinkedList();

// Tests
// console.log('initial: ',list);
// display test
// size test
// is empty test

list.insert(0, 'one');
list.insert(1, 'two');
list.insert(2, 'three');
list.insert(3, 'four');
// console.log('middle: ',list);
// console.log('get 2: ', list.get(2));
// console.log('remove 3: ', list.remove(3));
// console.log('final: ',list);

// --- Exercise 2 (Helper Functions) ------

// display
console.log('Display -----------');

// const display = (jonlist) => {
//   let length = jonlist.length;
//   for(let i = 0; i < length; i++) {
//     console.log('item: ', list.get(i));
//   }
// };

const display = jonlist => {
  // extract the head
  let node = jonlist.head;

  console.log('first node is: ', node.value);

  // while loop, node.next until null, console.log(node.value)
  while (node.next !== null) {
    // console.log('node------>', node);
    node = node.next;
    console.log('item: ', node.value);
  }
  // console.log('node value----->', node.value);
  return;
};
// display(list);

// size
console.log('Size -----------');
const size = jonlist => {
  let counter = 1;
  let node = jonlist.head;
  console.log('counter starts at: ', counter);
  while (node.next !== null) {
    counter++;
    node = node.next;
    console.log('counter: ', counter);
  }
  return counter;
};
// console.log('list is this big: ', size(list));

// empty
// console.log('Empty -----------');
const isEmpty = list => (list.head === null ? true : false);
// console.log(isEmpty(list));
// console.log(isEmpty(secondList));

// find previous
console.log('Find Previous -----------');
const findPrevious = (jonlist, node) => {
  let newNode = jonlist.head;
  while (newNode.next.value !== node) {
    newNode = newNode.next;
  }
  return newNode.value;
};

// console.log(findPrevious(list, 'three'));

// find last
console.log('Find Last -----------');
const findLast = jonlist => {
  let node = jonlist.head;

  while (node.next !== null) {
    node = node.next;
  }
  return node;
};

console.log(findLast(list));
