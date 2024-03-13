// Question Link :-
// https://leetcode.com/problems/longest-common-prefix/description/

// Starter Code :-
/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix = function (strs) {

// };

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let commonPrefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(commonPrefix)) {
      commonPrefix = commonPrefix.slice(0, commonPrefix.length - 1);
    }
  }
  return commonPrefix;
};

// Approach :-

// 1. Initially if strs array is empty then return "" empty string
// 2. We assume that the first element is the common prefix so initialise a variable commonPrefix = strs[0]
// 3. iterate through strs array
//      i.  while current string does not starts with commonPrefix we remove the last character of commonPrefix
// 4. Eventually we are leftout with the common prefix if it exists or empty string so return commonPrefix.

// TIME COMPLEXITY : O(n * m) where n is the length of strs array and m is the average length of the strings inside strs array
// SPACE COMPLEXITY : O(1) as we are using only commonPrefix variable here.
