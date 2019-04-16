function addTwoNumbers(l1, l2) {
  const head = new ListNode('head');
  addTwoNumbersHelper(head, l1, l2, 0);
  return head.next;
}

function addTwoNumbersHelper(currNode, l1, l2, carry) {
  let val1 = 0;
  let val2 = 0;
  if (!(l1 || l2)) {
    if (carry) {
      currNode.next = new ListNode(carry);
    }
    return currNode;
  }
  if (l1) {
    val1 = l1.val;
    l1 = l1.next;
  }
  if (l2) {
    val2 = l2.val;
    l2 = l2.next;
  }
  const total = val1 + val2 + carry;
  carry = Math.floor(total / 10);
  currNode.next = new ListNode(total % 10);
  currNode = currNode.next
  return addTwoNumbersHelper(currNode, l1, l2, carry);
}
