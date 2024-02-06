// Write a function to find the longest word in a given string.

function findLongestWord(str) {
    // Split the string into an array of words
    const words = str.split(" ");
  
    // Initialize variables to keep track of the longest word and its length
    let longestWord = "";
    let maxLength = 0;
  
    // Iterate through each word in the array
    for (let word of words) {
      // Remove any non-alphabetic characters from the word
      const cleanWord = word.replace(/[^a-zA-Z]/g, '');
  
      // Check if the current word is longer than the current longest word
      if (cleanWord.length > maxLength) {
        // Update the longest word and its length
        longestWord = word;
        maxLength = cleanWord.length;
      }
    }
  
    // Return the longest word
    return longestWord;
  }
  
  // Example usage:
  const inputString = "I am learning Programming to become a programmer";
  const result = findLongestWord(inputString);
  console.log(`Longest word in "${inputString}": ${result}`);