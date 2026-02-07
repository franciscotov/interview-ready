// 4. *Palindrome Permutation*: 

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation (str: string): boolean {
    let map = new Map();
    str = str.toLocaleLowerCase().replaceAll(" ", '');
    for(let char of str) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    return Array.from(map.values()).filter((val) => val % 2 === 1).length <= 1;
}