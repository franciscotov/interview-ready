// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//
// 1 -> 2 -> 2-> 2 -> 4

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
  let link = new LinkedList(head);
  // if(!head) return;
  let set = new Set<T>();

  let newlist = link.filter((node) => {
    if(set.has(node.value)) {
      return false;
    }
    set.add(node.value)
    return true;
  })
  return newlist.head;
}

// export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
//   let myList = new LinkedList<T>();
//   myList.tail = head;
//   while(myList.tail) {
//     let next = myList.tail.next;
//     if(!next) break;
//     if(myList.tail?.value === next.value) {
//       myList.tail.next = next.next;
//     } else {
//       myList.tail = myList.tail?.next;
//     }
//   }
//   return head;
// }
