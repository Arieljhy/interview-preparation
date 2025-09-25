/**
 * 给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。
 */

const isPalindrom = (head) => {
    const arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    let l = 0, r = arr.length - 1;
    while (l <= r) {
        if (arr[l] !== arr[r]) return false;
        l++;
        r--;
    }

    return true;

}