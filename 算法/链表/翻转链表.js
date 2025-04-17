
function ListNode(val, next) {
    this.val = val ?? 0;
    this.next = next ?? null;
}

const reverseList = (head) => {
    const newNode = new ListNode();
    while (head) {
        const temp = newNode.next;
        newNode.next = new ListNode(head.val);
        newNode.next.next = temp;
        head && (head = head.next)
    }
    return newNode.next;
}