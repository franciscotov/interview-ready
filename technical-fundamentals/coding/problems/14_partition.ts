// 4. *Partition*:

// Write code to partition a linked list around a value x,
// such that all nodes less than x come before all nodes greater than or equal to x.
// If x is contained within the list, the values of x only need to be after the elements
// less than x (see below). The partition element x can appear anywhere in the
// "right partition"; it does not need to appear between the left and right partitions.

// ```
// EXAMPLE
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1[partition=5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function partition<T>(
  head: Node<T> | undefined,
  x: T,
): Node<T> | undefined {
  let saved:Node<T> | undefined;
  let savedC:Node<T> | undefined;
  let c = head;
  while(c) {
    let n = c.next;
    if(!n) {
      break;
    }
    // we do the same as we want to remove all the nodes with values greater than x
    if(n.value >= x) {
      c.next = n.next;
      // we save the elements we 'removed'
      if(!saved) {
        saved = n;
        savedC = saved;
      } else if(savedC?.next) {
        savedC.next = n;
        savedC = savedC.next
      }
    } else {
      c = n;
    }
  }
  if(c && saved) {
    c.next = saved
  }
  return head;
}
