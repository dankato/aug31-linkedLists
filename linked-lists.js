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
    if(nthPosition === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }
    else {
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
    if(nthPosition < 0 || nthPosition >= this.length) {
      throw new Error('Index error');
    }
    if (nthPosition === 0) {
      this.head = this.head.next;
    }
    else {
      const node = this._find(nthPosition - 1);
      node.next = node.next.next;
    }
    this.length--;
  }
}
const list = new LinkedList();

// Tests
console.log('initial: ',list);
list.insert(0, 'one');
list.insert(1, 'two');
list.insert(2, 'three');
list.insert(3, 'four');
console.log('middle: ',list);
console.log('get 2: ', list.get(2));
console.log('remove 3: ', list.remove(3));
console.log('final: ',list);


// --- Exercise 2 (Helper Functions) ------

// display
console.log('Display -----------');
const display = (jonlist) => {
  let length = jonlist.length;
  for(let i = 0; i < length; i++) {
    console.log('item: ', list.get(i));
  }
};
display(list);

// size
console.log('Size -----------');
const size = (jonlist) => {
	let counter = 0;

	// bubbling
	//var begin = list.head
	// for () {
	// var newList = list.head
	//newList= newList + '.next'
	// }
  while(list.head.next !== null) {
		counter++;
    console.log('counter: ',counter);
  }
	return counter;
};
// size(list);

console.log('1----->',list.node);
console.log('2------>', list.head.next.next.next);



// empty


// find previous


// find last



