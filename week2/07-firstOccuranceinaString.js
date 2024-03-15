// Question Link :-
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

// Starter Code :-
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// var strStr = function (haystack, needle) {

// };

var strStr = function (haystack, needle) {
  // METHOD - 1

  //   return haystack.indexOf(needle);

  // METHOD - 2

  if (needle === "") return 0; // If needle is an empty string, return 0
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let match = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        match = false;
        break;
      }
    }
    if (match) return i; // If a match is found, return the starting index
  }
  return -1; // If no match is found, return -1
};

// Approach :-

// ****METHOD - 1 ****

// 1. using indexOf() method by passing needle as a parameter

// TIME COMPLEXITY : O(n) where n is the length of string haystack
// SPACE COMPLEXITY : O(1) where n is the length of string haystack

// ****METHOD - 2 ****

// 1. if needle is an empty strings return 0.
// 2. iterate through haystack string characters from index 0 to length of haystack - needle + 1 (iterator will be i=0)
//      i.   initialise a variable match = true which would check if needle is a match to a substring of haystack
//      ii.  iterate through needle string characters from index 0 to needle length (iterator will be j=0)
//              a.  if haystack[i + j] is not equal to current value of needle i.e. needle[j]
//                  A.  toggle match to false
//                  B.  break the loop
//      iii. if match is true then return current index of haystack string i.e. i
// 3. return -1 which means we could not find the a substring which is equal to needle

// TIME COMPLEXITY : O(n*m) where n is the length of string haystack and m is the length of string needle
// SPACE COMPLEXITY : O(1) as we are using only constant space to store match variable
