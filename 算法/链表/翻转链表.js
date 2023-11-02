const reverseList = (head)=>{
    if(head === null) return head;
    let newNode = new ListNode();
    newNode.next = head;
    let pre = newNode;
    let cur = pre.next;
    while(cur.next){
        let temp = cur.next;
        cur.next = temp.next;
        temp.next = pre.next;
        pre.next = temp;
    }
    return newNode.next;
}