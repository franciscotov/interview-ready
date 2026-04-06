// 1. *Three in One*: Describe how you could use a single array to implement three stacks.

export default class ThreeStacks<T> {
    private array: Array<T | undefined>//T[];
    private stackCapacity: number;

    constructor(arrayLength: number) {
        this.array = new Array<T>(arrayLength);
        this.stackCapacity = arrayLength/3;
    }

    // length    stacks   stacks' cap
    //   0          0         0       
    //   3          3         1       
    //   6          3         2       
    //   9          3         3       
    push(stackNum: number, value: T): void {
        let from = stackNum* this.stackCapacity;
        let to = from+ this.stackCapacity;
        for(let i = from; i <= to ; i ++) {
            if(!this.array[i]){
                this.array[i] = value;
                break; 
            }
        }
    }

    pop(stackNum: number): T | undefined {
        let ele = undefined;
        let from = stackNum* this.stackCapacity;
        let to = from+ this.stackCapacity;
        for(let i = to; i >= from ; i --) {
            if(this.array[i]){
                ele= this.array[i]
                this.array[i] = undefined;
                break; 
            }
        }
        return ele;
    }

    peek(stackNum: number): T | undefined {
        let ele = undefined;
        let from = stackNum* this.stackCapacity;
        let to = from+ this.stackCapacity;
        for(let i = from; i <= to ; i ++) {
            if(this.array[i]){
                ele = this.array[i];
                break; 
            }
        }
        return ele
    }
}