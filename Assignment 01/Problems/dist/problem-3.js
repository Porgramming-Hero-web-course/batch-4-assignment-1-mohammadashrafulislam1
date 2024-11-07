"use strict";
{
    // 
    function countWordOccurrences(sentence, word) {
        // case sensitive with ToLowerCase:
        const wordsFromSentence = sentence.toLowerCase().split(" ");
        // case sensitive with ToLowerCase:
        const targetWord = word.toLowerCase();
        let count = 0;
        // For loop:
        for (const w of wordsFromSentence) {
            if (w === targetWord) {
                count++;
            }
        }
        return count;
    }
    // Input:
    console.log(countWordOccurrences("I love typescript", "typescript")); // Output: 1
    // 
}
