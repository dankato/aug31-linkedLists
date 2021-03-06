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
list.insert(4, 'five');
list.insert(5, 'six');
list.insert(6, 'seven');
list.insert(7, 'eight');
list.insert(8, 'nine');
list.insert(9, 'ten');
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

  console.log('first node is: ', node);
	
  if (node === null) {
    return 'List is empty :(';
  }


  // while loop, node.next until null, console.log(node.value)
  while (node.next !== null) {
    // console.log('node------>', node);
    node = node.next;
    console.log('item: ', node.value);
  }
  console.log('node value----->', node.value);
  // return;
};
display(list);

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
const findPrevious = (jonlist, targetValue) => {
  let node = jonlist.head;
  while (node.next !== null && node.next.value !== targetValue) {
    node = node.next;
  }
  return node.value;
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
// console.log(findLast(list));

//create function
//start counter at 1
//create while loop to interate thru until next = null
//counter / 2
//iterate thru again using ctr/2 number of times

//Exercise 3 - find middle element
console.log('Find Middle Element -----------');
const findMiddle = jonlist => {
  let slowRunner = jonlist.head;
  let fastRunner = jonlist.head;
  while (fastRunner.next !== null && fastRunner.next.next !== null){
    slowRunner = slowRunner.next;
    fastRunner = fastRunner.next.next;
  }
  return slowRunner.value;
};

// console.log(findMiddle(list));

// --- Exercise 4 (3rd from last) ------
console.log('Find Third to Last Element -----------');
const thirdToLast = (jonlist) => {

  if(isEmpty(list)) {
    return new Error('the list empty');
  }

  let firstNode = jonlist.head;
  let lastNode = jonlist.head.next;

  while(lastNode.next !== null && lastNode.next.next !== null ) {
    firstNode = firstNode.next;
    lastNode = lastNode.next;
  }
  return firstNode.value;
};

// console.log('what is the 3rd node to last: ', thirdToLast(list));

// --- Exercise 5 (reverse linked list) ------
console.log('Reversed List -----------');


const reverseList = (jonlist) => {
  let node = jonlist.head;
  let previous = null;
  while(node) {
    let save = node.next;
    node.next = previous;
    previous = node;
		node = save;
		// console.log(node);
  }
  return previous;
};
let reverse = reverseList(list);
console.log('XXXXXXX---->',reverse);
// display(reverse);
// console.log('reversed list: ', display(reverse));

// --- Exercise 6 (cycle) ------