// 2.  *Return Kth to Last*:

// Implement an algorithm to find the kth to last element of a singly linked list.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function kthToLast<T>(
  head: Node<T>,
  k: number,
): Node<T> | undefined {
  let link = new LinkedList(head);
  const l = link.length();

  let n;
  link.visit((node, index) => {
    if(index === l - k) {
      n = node;
    }
  });
  return n;
}


// export default function kthToLast2<T>(
//   head: Node<T>,
//   k: number,
// ): Node<T> | undefined {
//   if(k === 0) return undefined;
//   let copy = head;
//   let n = 0;
//   while(copy) {
//     let next = copy.next;
//     if(!next) {
//       n++;
//       break;
//     }
//     copy = next;
//     n++;
//   }
//   let thCopy = head;
//   while (n) {
//     if(n === k){
//       return thCopy;
//     } 
//     if(!thCopy.next) return undefined;
//     thCopy = thCopy.next;
//     n--;
//   }
// }
