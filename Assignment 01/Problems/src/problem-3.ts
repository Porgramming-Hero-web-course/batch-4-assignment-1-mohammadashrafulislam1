{
    // 
    function countWordOccurrences(sentence: string, word: string): number {
        // case sensitive with ToLowerCase:
        const wordsFromSentence = sentence.toLowerCase().split(" "); 
        // case sensitive with ToLowerCase:
        const targetWord = word.toLowerCase();
        let count = 0;
        // For loop:
        for (const w of wordsFromSentence) {
            if (w === targetWord) {
                count++;  // took idea from JS
            }
        }
        return count;
    }
    
    // Input:
    const wordChecking = (countWordOccurrences("I love typescript", "typescript")); // Output: 1
    console.log(wordChecking)
    // 
}