// 3.  URLify:

// Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the "true" length of the string.

export default function URLify (s1 : string): string {
    // return s1.replaceAll(' ', '%20');
    let s = '';
    for(let char of s1) {
        s += char === ' ' ? '%20': char;
    }
    return s;
}