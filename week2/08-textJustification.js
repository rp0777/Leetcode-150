// Question Link :-
// https://leetcode.com/problems/text-justification/description/

// Starter Code :-
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
// var fullJustify = function(words, maxWidth) {

// };

var fullJustify = function (words, maxWidth) {
  // ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
  let lines = [];
  let currentLine = [words[0]]; // ["This"]
  let currentLength = words[0].length; // 4

  for (let i = 1; i < words.length; i++) {
    if (currentLength + currentLine.length + words[i].length <= maxWidth) {
      // 18 !< 16
      currentLength += words[i].length; // 8
      currentLine.push(words[i]); // ["This", "is", "an"]
    } else {
      lines.push(formatLine(currentLine, maxWidth, currentLength));
      currentLength = words[i].length;
      currentLine = [words[i]];
    }
  }

  let lastString = currentLine[0];

  for (let i = 1; i < currentLine.length; i++) {
    lastString = lastString + " " + currentLine[i];
  }

  lines.push(lastString.padEnd(maxWidth, " "));

  return lines;
};

function formatLine(lines, width, lineLength) {
  // ["This", "is", "an"], 16, 8
  if (lines.length == 1) return lines[0].padEnd(width, " ");
  let string = "";
  let difference = width - lineLength; // 8
  let spaceFill = Math.floor(difference / (lines.length - 1)); // 4
  let offSet = difference - spaceFill * (lines.length - 1); // 0
  for (let i = 0; i < lines.length - 1; i++) {
    string = string + lines[i].padEnd(lines[i].length + spaceFill, " "); // "This    is    "
    if (offSet != 0) {
      string += " ";
      offSet--;
    }
  }

  string += lines[lines.length - 1]; // "This    is    an"

  return string; // "This    is    an"
}

// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]

// Approach :-

// fullJustify function

// 1. The fullJustify function takes two parameters: words, an array of words to be justified, and maxWidth, the maximum width each line of text can occupy.
// 2. It initializes an empty array called lines to store the justified lines, and initializes currentLine with the first word from the words array. It also initializes currentLength with the length of the first word.
// 3. It then iterates through the words array starting from the second word (index 1).
// 4. Inside the loop, it checks if adding the next word to the current line would exceed the maxWidth. If not, it adds the word to the current line and updates currentLength accordingly. If adding the word would exceed the maxWidth, it formats the current line using the formatLine function and pushes it into the lines array. Then, it resets currentLength and currentLine with the current word.
// 5. After the loop, it formats the last line by simply joining the remaining words with spaces and pads the line with spaces to reach the maxWidth. This line is then pushed into the lines array.
// 6. Finally, it returns the array lines, which contains all the justified lines of text.

// formatLine function

// The formatLine function is responsible for justifying a single line of text. It takes three parameters: lines, an array of words in the line, width, the maximum width the line should occupy, and lineLength, the current length of the line.

// 1. If the line contains only one word, it pads the word with spaces to reach the width and returns it.
// 2. Otherwise, it calculates the total number of spaces needed to reach the width by subtracting the lineLength from the width. Then, it calculates the number of spaces to be added between each word (spaceFill) and the offset spaces (offSet) to distribute the remaining spaces.
// 3. It then iterates through the words in the line, padding each word with spaceFill spaces and adding an additional space if there's an offset space remaining.
// 4. Finally, it appends the last word to the formatted string and returns it.

// TIME COMPLEXITY : O(n*m) where n is the length of words array and m is the length of currentLine array
// SPACE COMPLEXITY : O(n) where n is the length of words array as we are using an extra space to store result in lines array
