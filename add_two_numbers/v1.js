var addTwoNumbers = function(l1, l2) {
  const head = new ListNode('head');
  let currNode = head
  let carry = 0;
  
  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const total = val1 + val2 + carry;
    carry = Math.floor(total / 10);
    currNode.next = new ListNode(total % 10);
    currNode = currNode.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  
  if (carry) {
    currNode.next = new ListNode(carry);
  }
  
  return head.next;
};
