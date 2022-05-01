const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.q 
  }
  getUnderlyingList() {
    return this.q
  }
  enqueue(value) {
    if(this.q === undefined) {
      this.q = new ListNode(value)
      return
    }
    let current = this.q
    while(current.next) {
      current = current.next
    }
    current.next = new ListNode(value)
  }
  dequeue() {
    let top = this.q.value
    this.q = this.q.next
    return top
  }
}

/*class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
*/

module.exports = {
  Queue
};
