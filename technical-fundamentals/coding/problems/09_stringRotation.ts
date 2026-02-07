// 9. *String Rotation*;

import { isSubstring } from "./__utils__/strings"

// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring.
// [e.g., "waterbottle" is a rotation of 'erbottlewat")

export default function stringRotation(s1: string, s2: string): boolean {
    // const map = new Map();
    // for(let i =0; i <s1.length; i++ ){
    //     let v = s1[i];
    //     map.set(v, (map.get(v) || 0)+ 1);
    // }
    // for(let i =0; i <s2.length; i++ ){
    //     let v = s1[i];
    //     if(!map.get(v)) return false;
    //     map.set(v, (map.get(v) || 0)+ 1);
    // }
    // return Array.from(map.values()).filter(v => v %2 !==0).length === 0;
    
    let modifiedS2 = s2; 
    for(let i =0; i <s2.length; i++ ){
        // trying to rotate it
        if(modifiedS2 === s1) return true;
        modifiedS2 = modifiedS2.slice(1, modifiedS2.length) + modifiedS2[0];
        if(modifiedS2 !== s1) continue;
    }
    return false
}
