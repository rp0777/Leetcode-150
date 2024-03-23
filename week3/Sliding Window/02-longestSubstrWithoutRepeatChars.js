// Question Link :-
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// Starter Code :-
/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {

// };

var lengthOfLongestSubstring = function (s) {
  const map = new Map();

  let left = 0;
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    if (map.has(s[right])) {
      left = Math.max(map.get(s[right]) + 1, left);
    }
    map.set(s[right], right);
    max = Math.max(max, right - left + 1);
  }

  return max;
};

// Approach :-

// 1. Initialise a map to keep track of repeating characters and initialise left pointer and max variable to store the max length
// 2. traverse through string s using for loop by initialising right pointer from start to end of string s
//       2.1.  We will check if the current element at right pointer of s is inside the map or not
//              2.1.1.  if it exists then update left pointer to move to the next position after last occurrence,
//       2.2.  we will increase the right pointer in the map by adding the current element
//       2.2.  update max to maximum of current value of max and difference between right and left pointer + 1
// 3. return max

// TIME COMPLEXITY : O(n) where n is the length of input string s
// SPACE COMPLEXITY : O(n) where n is the length of input string s
//                    as we use extra space for storing characters of string s in map which can be of length n in worst case
