// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;

  constructor(head?: Node<T>) {
    this.head = head;
    this.tail = head;
  }

  push(value: T) {
    if(!this.tail) {
      this.head = {value}
      this.tail = this.head;
      return;
    }
    this.tail.next = {value};
    this.tail = this.tail.next
  }
  filter(cb: (node: Node<T>) => boolean): LinkedList<T> {
    let p = this.head;
    let list = new LinkedList<T>();
    while(p) {
      if(cb(p)) {
        list.push(p.value);
      }
      p = p.next;
    }
    return list;
  }
  visit(cb: (node: Node<T>, index: number) => void) {
    let p = this.head;
    let i =0;
    while(p) {
      cb(p, i);
      i++;
      p = p.next;
    }
  }
  remove() {}
  merge() {}
  print() {}

  // extra

  //find(): Node<T> {}
  //get(index: number): Node<T> {}
  //iterator(): LinkedListIterator {}
  length(): number {
    let length = 0;
    this.visit(() =>{ length++})
    return length;
  };
}

const list = new LinkedList();
