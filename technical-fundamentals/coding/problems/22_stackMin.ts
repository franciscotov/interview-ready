// 2. *Stack Min*: How would you design a stack which,
// in addition to push and pop,
// has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.
//

export default class StackMin<T> {
    private array: Array<T>;
    private sortedArr: Array<T>;
    constructor() {
        this.array = new Array();
        this.sortedArr = new Array();
    }

    push(value: T): void {
        this.array.push(value);
        const lastMin = this.sortedArr[this.sortedArr.length -1]
        if(!lastMin || (value < lastMin)) {
            this.sortedArr.push(value)
        }
    }

    pop(): T | undefined {
        const ele = this.array.pop();
        if (ele === this.sortedArr[this.sortedArr.length -1]){
            this.sortedArr.pop();
        }
        return ele;
    }

    min(): T | undefined {
        return this.sortedArr[this.sortedArr.length -1];
    }
}
