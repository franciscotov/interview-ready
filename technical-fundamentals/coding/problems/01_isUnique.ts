// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
    let hash = new Set();
    for(let char of str) {
        if(hash.has(char)) return false;
        hash.add(char)
    }
    return true;
}
