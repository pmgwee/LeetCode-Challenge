/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//  list 1, list 2 -> sorted list  (splicing together the nodes of two list)
//  return head 
var mergeTwoLists = function (list1, list2) {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
    let head = null;
    let temp = head;


    if (list1.val < list2.val) {
        temp = head = new ListNode(list1.val)
        list1 = list1.next;
    } else {
        temp = head = new ListNode(list2.val)
        list2 = list2.next;
    }

    while (list1 && list2) {
        if (list1.val < list2.val) {
            temp.next = new ListNode(list1.val)
            list1 = list1.next;
            temp = temp.next;
        } else {
            temp.next = new ListNode(list2.val)
            list2 = list2.next;
            temp = temp.next;
        }
    }
    while (list1) {
        temp.next = new ListNode(list1.val);
        list1 = list1.next;
        temp = temp.next;
    }


    while (list2) {
        temp.next = new ListNode(list2.val);
        list2 = list2.next;
        temp = temp.next;
    }

    return head;
};