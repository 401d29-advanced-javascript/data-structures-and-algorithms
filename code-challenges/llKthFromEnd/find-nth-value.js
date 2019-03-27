'use strict';

class Node {
  constructor(value) {
    this.value = value,
    this.next = null;
  };

  printNode() {
    console.log('printNode(): ', this.value);
    return this.value.toString();
  };

};


let node = new Node();
node.printNode();

class LinkedList {
  constructor() {
    this.head = null;
  };

  findNthPlace(n) {
    let c1;
    let c2;
    let counter;
    if(head !== null) {
      c1 = head;
      c2 = head;
      counter = 0;
    }
    while(c1 !== null) {
      if(counter < n) {
        c1 = head.next;
        counter++;
      } else {
        c1 = head.next;
        c2 = head.next;
      }
    }
    if(counter < n) {
      return null;
    } else {
      return c2;
    }
  };

};

let list = new LinkedList();


//this test only works with an existing linked list
//will need to populate with the prepend method to create a linked list
console.log(list.findNthPlace(4));