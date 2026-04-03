// 8.  *Intersection*;

// Given two (singly) linked lists, determine if the two lists intersect.
// Return the first intersecting node. Note that the intersection is defined
// based on reference, not value.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function intersection<T>(
  list1: Node<T> | undefined,
  list2: Node<T> | undefined,
): Node<T> | undefined {
  // Common part: 7 -> 8 -> 9
  // List 1: 1 -> 2 -> 3 -> 4 -> 7 -> 8 -> 9
  // List 2: 5 -> 6 -> 7 -> 8 -> 9
  let set = new Set<Node<T>>();
  let l1 = new LinkedList(list1);
  let l2 = new LinkedList(list2);
  let nodeToReturn: Node<T> | undefined = undefined;
  l1.visit((node, _i) => {
    set.add(node);
  });
  l2.visit((node) => {
    if(set.has(node) && !nodeToReturn) {
      nodeToReturn = node;
    }
  })
  return nodeToReturn;
}

