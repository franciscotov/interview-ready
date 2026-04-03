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
  remove(cb: (node: Node<T>, i: number) => boolean): LinkedList<T>{
    let p = this.head;
    let i =0;
    let list = new LinkedList<T>();
    while(p) {
      if(cb(p, i)) {
        list.push(p.value);
      }
      i++;
      p = p.next;
    }
    return list;
  }
  merge(a: LinkedList<T>): LinkedList<T> {
    let p = this.tail
    if(!p) {
      this.head = a.head;
      this.tail = a.tail;
    } else {
      p.next = a.head;
    }
    return this;
  }
  print() {
    let s = '';
    this.visit((node, i) => {
      s += node.value
      if(node.next) {
        s += '->'
      }
    })
    console.log(s)
  }

  // extra

  //find(): Node<T> {}
  //get(index: number): Node<T> {}
  iterator(): LinkedList<T> {
    let list = new LinkedList<T>(this.tail);
    return list;
  }
  length(): number {
    let length = 0;
    this.visit(() =>{ length++})
    return length;
  };
}