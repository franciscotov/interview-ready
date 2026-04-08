// 6. *Animal Shelter*:

// An animal shelter, which holds only dogs and cats, operates on a strictly
// "first in, first out" basis. People must adopt either the "oldest"
// (based on arrival time) of all animals at the shelter,
// or they can select whether they would prefer a dog or a cat
// (and will receive the oldest animal of that type).
// They cannot select which specific animal they would like.
// Create the data structures to maintain this system and implement operations
// such as enqueue, dequeueAny, dequeueDog, and dequeueCat.
// You may use the built-in LinkedList data structure.
import { LinkedList } from "./10_LinkedList";

export type AnimalType = "dog" | "cat";

export class Animal {
  type: AnimalType;
  constructor(type: AnimalType) {
    this.type = type;
  }
}

export default class AnimalShelter {
  private shelterList: LinkedList<Animal>;
  constructor() {
    this.shelterList = new LinkedList();
  }

  enqueue(type: AnimalType): void {
    let animal = new Animal(type);
    this.shelterList.push(animal);
  }

  dequeueAny(): Animal | undefined {
    let res: Animal | undefined;
    this.shelterList = this.shelterList.remove((node, i) => {
      res = i === this.shelterList.length() -1 ? node.value: undefined;
      return i !== this.shelterList.length() - 1;
    });
    return res;
  }

  dequeueDog(): Animal | undefined {
    let res: Animal | undefined;
    let lastDogIndex: number = 0;
    this.shelterList.visit((node, i ) => {
      if(node.value.type === 'dog') {
        lastDogIndex = i;
      }
    })
    this.shelterList = this.shelterList.remove((node, i) => {
      if(node.value.type === 'dog' && i === lastDogIndex) {
        res = node.value;
      }
      return i !== lastDogIndex;
    });
    return res;
  }

  dequeueCat(): Animal | undefined {
    let res: Animal | undefined;
    let lastCatIndex: number = 0;
    this.shelterList.visit((node, i ) => {
      if(node.value.type === 'cat') {
        lastCatIndex = i;
      }
    })
    this.shelterList = this.shelterList.remove((node, i) => {
      if(node.value.type === 'cat' && i === lastCatIndex) {
        res = node.value;
      }
      return i !== lastCatIndex;
    });
    return res;
  }
}
