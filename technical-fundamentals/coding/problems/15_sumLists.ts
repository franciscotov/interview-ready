// 5. *Sum Lists*: You have two numbers represented by a linked list,
// where each node contains a single digit. The digits are stored in reverse order,
// such that the Vs digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.

// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumLists(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
  let l1 = new LinkedList(list1);
  let l2 = new LinkedList(list2);
  let list = new LinkedList<number>();
  let n1 = '';
  let n2 = '';
  l1.visit((node, _i) => {
    n1 = node.value + n1;
  });
  l2.visit((node, _i) => {
    n2 = node.value + n2;
  });
  let num = Number(n1) + Number(n2);
  num.toString().split('').reverse().map((val) => list.push(Number(val)));
  list.print();
  
  return list.head;
}

// export default function sumLists(
//   list1: Node<number> | undefined,
//   list2: Node<number> | undefined,
// ): Node<number> | undefined {
//   let res = 0;
//   let a = list1;
//   let b = list2;
//   let lastNode = null
//   while (a || b) {
//     let na = a?.next;
//     let nb = b?.next;
//     let val = 0;
//     if(a && b) {
//       val = a?.value + b?.value + res;
//     } else if(a) {
//       lastNode = a;
//       val  = a.value + res;
//     } else if(b){
//       val  = b.value + res;
//     }
//     if(val > 9){
//       val %= 10;
//       res = 1;
//     }
//     a!.value = val;
//     a = na;
//     b = nb;
//   }
//   if(res && lastNode) {
//     lastNode.next = {value: res, next: undefined}
//   }
//   return list1;
// }
