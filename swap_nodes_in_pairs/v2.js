/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
  const dummy = new ListNode();
  dummy.next = head;
  let curr = dummy;
  while (curr && curr.next && curr.next.next) {
    let first = curr.next;
    let sec = curr.next.next;
    curr.next = sec;
    first.next = sec.next;
    sec.next = first;
    curr = curr.next.next;
  }
  return dummy.next;
};