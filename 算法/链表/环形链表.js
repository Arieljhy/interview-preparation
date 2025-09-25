/**
 * 给你一个链表的头节点 head ，判断链表中是否有环。如果链表中存在环 ，则返回 true 。 否则，返回 false 。
 * @param {*} head 
 * @returns 
 */
const hasCycle = (head) => {
    let p1 = p2 = head;
    while (p1 && p2) {
        p1 = p1.next;
        p2 = p2.next ? p2.next.next : null;
        if (p1 === p2 && p1 && p2) return true;
    }
    return false;
};

/**
 * 环形链表II
 * 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 * 不允许修改 链表。
 */

const hasCycleII = (head) => {
    let p1 = p2 = head;
    while (p1 && p2) {
        p1 = p1.next;
        p2 = p2.next ? p2.next.next : null;

        if (p1 === p2) {
            p2 = head;
            while (p1 && p2 && p1 !== p2) {
                p1 = p1.next;
                p2 = p2.next;
            }
            return p1;
        }
    }
    return null;
}

