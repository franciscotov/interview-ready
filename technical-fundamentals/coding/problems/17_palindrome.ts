// 7. *Palindrome*:

// Implement a function to check if a linked list is a palindrome.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function isPalindrome<T>(head: Node<T> | undefined): boolean {
  let list = new LinkedList(head);
  let map = new Map<T, number>();
  let str = '';
  let l = list.length();
  if(l === 1) return true;
  let even = l%2 === 0;
  let pivot = Math.floor(l/2);
  let arr: T[] = [];
  let isPal = true;
  list.visit((node, i) => {
    console.log({pivot, l})
    if(i< pivot) {
      arr.push(node.value);
    } else if (!even && i === pivot+1) {
      // continue
    } else {
      isPal = arr.pop() === node.value;
    }
  })
  return isPal;
}
