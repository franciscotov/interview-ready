// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression (str: string) : string {
    let s = '';
    let lastChar = '';
    let currentCount = 0;
    let maxCount = 0;
    for (let char of str) {
        if(lastChar !== char) {
            if(lastChar) {
                s += currentCount;
            }
            s+= char;
            lastChar = char;
            maxCount = maxCount> currentCount? maxCount: currentCount;
            currentCount = 1;
        } else {
            currentCount++;
        }
    }
    if(currentCount > 1) s += currentCount;
    if(maxCount <= 1) s = s.replaceAll(maxCount.toString(), '');
    return s
}