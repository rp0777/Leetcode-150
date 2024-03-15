// Question Link :-
// https://leetcode.com/problems/zigzag-conversion/description/

// Starter Code :-
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// var convert = function (s, numRows) {

// };

var convert = function (s, numRows) {
  if (numRows === 1) return s; // If only one row, return the original string
  const rows = new Array(numRows).fill(""); // Create an array to hold characters for each row
  let currentRow = 0;
  let goingDown = false;

  for (const char of s) {
    rows[currentRow] += char; // Append character to the current row

    // Change direction if reaching the top or bottom row
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    // Increment or decrement currentRow based on direction
    currentRow += goingDown ? 1 : -1;
  }

  // Concatenate all rows to form the zigzag pattern
  return rows.join("");
};

// Approach :-

// 1. to clear the test case of single row we add a condition to check if numRows is equal to 1
//      if true then return input string s
// 2. initialise a new array rows of length numRows filled with empty strings
// 3. initialise currentRows variable to 0 to keep track of current row & goingDown variable to keep track of the direction in which we traverse
// 4. iterate through string s for each character
//      i.    append the current character to correntRow element of rows array
//      ii.   if currentRow is 0 or numRows - 1 then toggle goingDown variable to change it's direction
//      iii.  if goingDown is false then  we can reduce currentRow by 1 else increment it by 1
// 5. at this point we have the required answer as an array elements of rows array. so we will return rows.join("") to return string answer.

// TIME COMPLEXITY : O(n) where n is the length of string s
// SPACE COMPLEXITY : O(n + m) where m is the number of numRows
