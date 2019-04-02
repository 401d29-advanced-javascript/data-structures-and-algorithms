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

  //accepts ll1 and ll2 as separate unordered/ordered linked lists
  //returns the head of ll1 which will be the head of the new linked list
  //once ll1 and ll2 are merged
  merge(ll1, ll2) {
    let temp1;
    let temp2;
    let current1 = ll1.head;
    let current2 = ll2.head;
    while( current1.next !== null && current2.next !== null) {
      temp1 = current1.next;
      current1 = current2;
      temp2 = current2.next;
      current2.next = temp1;
    }
    current1 = head;
    return current1;

  }

};

let list = new LinkedList();