// 4. *Queue via Stacks*:

// Implement a MyQueue class which implements a queue using two stacks.

export default class MyQueue<T> {
    // private queue: Array<T>;
    // with two stacks
    private firstStack: Array<T>;
    private secondStack: Array<T>;
    constructor() {
        // this.queue = new Array();
        this.firstStack = new Array();
        this.secondStack = new Array();
    }

    enqueue(value: T): void {
        // this.queue.push(value);
        if(this.secondStack.length > 0) {
            let item;
            while (item = this.secondStack.pop()) {
                this.firstStack.push(item);
            }
        }
        this.firstStack.push(value);
    }

    dequeue(): T | undefined {
        // return this.queue.shift();
        let item;
        while (item = this.firstStack.pop()) {
            this.secondStack.push(item);
        }
        return this.secondStack.pop();
    }

    peek(): T | undefined {
        // return this.queue[0];
        return this.secondStack[0] || this.firstStack[0];
    }

    isEmpty(): boolean {
        // return this.queue.length === 0;
        return this.firstStack.length === 0 && this.secondStack.length === 0;
    }
}
