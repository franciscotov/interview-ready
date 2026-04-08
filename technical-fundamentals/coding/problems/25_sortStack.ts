// 5. *Sort Stack*:

// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure (such as an array).
// The stack supports the following operations: push, pop, peek, and isEmpty.

export default class SortStack<T> {
    private stack: Array<T>;
    constructor() {
        this.stack = new Array();
    }

    push(value: T): void {
        let temp = [...this.stack]
        const tempLength = temp.length;
        let wasPushed: boolean = false;
        this.stack = [];
        if(tempLength === 0) {
            this.stack.push(value);
            return;
        }
        for(let i=0; i < tempLength; i++) {
            let item = temp[i];
            if(value < item && i === tempLength-1) {
                this.stack.push(item);
                this.stack.push(value);
                
            } else if(value > item && !wasPushed) {
                wasPushed = true;
                this.stack.push(value);
                this.stack.push(item);
            } else {
                this.stack.push(item);
            }
        }
    }

    pop(): T | undefined {
        return this.stack.pop();
    }

    peek(): T | undefined {
        return this.stack[this.stack.length -1];
    }

    isEmpty(): boolean {
        return this.stack.length === 0;
    }
}
