// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
    let map = new Map();
    for(let char of s1) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    for(let char of s2) {
        if(!map.has(char)) return false;
        map.set(char, (map.get(char) || 0) + 1);
    }
    return Array.from(map.values()).filter((val) => val < 1).length <= 0;
}
