// 3. *Stack of Plates*:

// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack
// exceeds some threshold. Implement a data structure SetOfStacks that mimics this.
// SetOfStacks should be composed of several stacks and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave
// identically to a single stack (that is, pop() should return the same values as it would if
// there were just a single stack).

// FOLLOW UP: Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

export default class StackOfPlates<T> {
    private stacks: Array<Array<T>>;
    private maxCapacity: number;
    constructor(capacity: number) {
        this.maxCapacity = capacity;
        this.stacks = new Array(new Array());
    }

    push(value: T): void {
        const lastStack = this.stacks[this.stacks.length -1];
        if(lastStack.length === this.maxCapacity) {
            const newStack = new Array();
            newStack.push(value);
            this.stacks.push(newStack);
        } else {
            lastStack.push(value);
        }
    }
    
    pop(): T | undefined {
        const lastIndex = this.stacks.length -1;
        const lastStack = this.stacks[lastIndex];
        const item = lastStack.pop();
        if(lastStack.length === 0 && lastIndex > 0) {
            this.stacks.pop();
        }
        return item;
    }

    // FOLLOW UP
    popAt(index: number): T | undefined {
        // if we dont need to reorder the stacks
        const stackByIndex = this.stacks[index];
        if(!stackByIndex){
            return;
        } else {
            let res = stackByIndex.pop();
            if (stackByIndex.length === 0) {
                this.stacks.filter(stack => stack === stackByIndex);
            }
            return res;
        }
    }
}
