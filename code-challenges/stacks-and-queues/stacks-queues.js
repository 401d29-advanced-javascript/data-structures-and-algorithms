'use strict';

class PseudoQueue {
  constructor() {
    let stack1;
    let stack2;
  }
  /**
   * 
   * @param {enQueue} value 
   */
  enQueue(value){
    stack1.push(value);
    console.log(stack1);
  }
/**
 * @param {deQueue} result
 */
  deQueue(){
    while(stack1.top !== null){
      let temp = stack1.pop()
      stack2.push(temp);
    }
    let result = stack1.pop();
    while(stack2.top !== null){
      let temp = stack2.pop();
      stack1.push(temp);
    }
    return result;
  }
}
