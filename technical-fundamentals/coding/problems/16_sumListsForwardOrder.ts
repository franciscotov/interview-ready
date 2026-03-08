// 6.  Suppose the digits are stored in forward order. Repeat the above problem.

// ```
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).Thatis,617 + 295
// Output:9 -> 1 -> 2,Thatis,912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumListsForwardOrder(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
  if(!list1 && !list2) {
    return undefined;
  }
  let l1 = new LinkedList(list1);
  let l2 = new LinkedList(list2);
  let list = new LinkedList<number>();
  let n1 = '';
  let n2 = '';
  l1.visit((node, _i) => {
    n1 += node.value;
  });
  l2.visit((node, _i) => {
    n2 += node.value;
  });
  let num = Number(n1) + Number(n2 || '0');
  num.toString().split('').map((val) => list.push(Number(val)));
  list.print();
  
  return list.head;
}
