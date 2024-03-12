// Question Link :-
// https://leetcode.com/problems/length-of-last-word/description/

// Starter Code :-
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLastWord = function(s) {

// };

var lengthOfLastWord = function (s) {
  s = s.trim();
  const words = s.split(" ");

  return words[words.length - 1].length;
};

// Approach :-

// 1. trim the string s to remove any leading or trailing whitespaces
// 2. create a new variable to store an array of words in s string by using split method
// 3. return the length of last word from the words array

// TIME COMPLEXITY : O(n) where n is the length of string s
//        the trim and split method both has a time complexity of O(n) each so overall will be O(n)
// SPACE COMPLEXITY : O(n) where n is the length of string s
//        the words array would take and extra space of n
