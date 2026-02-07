// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
  let set = new Set<string>();
  let hasOneAway = false;
  for (let char of str1) {
    set.add(char);
  }
  for (let char of str2) {
    if (!set.has(char)) {
      if (hasOneAway) {
        return false;
      }
      hasOneAway = true;
    }
  }
  let min = Math.min(str1.length, str2.length);
  let max = Math.max(str1.length, str2.length);
  return hasOneAway || set.size === 0 || max - min <= 1;
}
