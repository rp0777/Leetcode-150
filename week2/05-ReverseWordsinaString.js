// Question Link :-
// https://leetcode.com/problems/reverse-words-in-a-string/description/

// Starter Code :-
/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function (s) {

// };

var reverseWords = function (s) {
  // "a good   example"
  let str = s.split(" "); // ["a", "good", "", "", "example"]
  s = "";
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] != "" && str[i] != " ") {
      s += str[i] + " "; // "example good a "
    }
  }
  return s.trim(); // "example good a"
};

// s = "a good   example"
// "example good a"

// Approach :-

// 1. Initialise an array str using split method on iniout string s with separator as space " "
// 2. assign an empty string to input string s so that we can store the reverse string in it
// 3. iterate through str array in reverse order from str.length-1 to 0
//      i.  if current str element is not an empty string AND is not equal to space (" ")
//              then append the current element and space to input string s
// 4. We get the required reverse order along with a space in end so to remove it we use trim method and return it.

// TIME COMPLEXITY : O(n) where n is the length of string s in terms of words or empty strings separated by space
// SPACE COMPLEXITY : O(n) where n is the number fo words or empty strings in string s separated by s
//                  here we use an extra space of n to store the words or empty strings of string s
