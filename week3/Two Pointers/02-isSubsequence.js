// Question Link :-
// https://leetcode.com/problems/is-subsequence/description/

// Starter Code :-
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isSubsequence = function(s, t) {

// };

var isSubsequence = function (s, t) {
  let p1 = 0,
    p2 = 0;

  while (p1 < s.length && p2 < t.length) {
    if (s[p1] !== t[p2]) {
      p2++;
    } else {
      p1++;
      p2++;
    }
  }

  if (p1 === s.length) return true;

  return false;
};

// Approach :-

// 1. Initialise 2 pointers p1 = 0 for string s and p2 = 0 for string t
// 2. We will use while loop until p1 reaches s.length and p2 reaches t.length so that we can compare both string's characters
//      i.   if character of string s at p1 is not equal to character of string t at p2 then increment p2 pointer by 1
//      ii.  else inrement both p1 and p2 pointers by 1
// 3. if p1 is equal to length of string s that means s is a subsequence of t hence return true
// 4. return false

// TIME COMPLEXITY : O(n) where n is the length of input string t
//                    we are traversing upto length of string t in the while loop so O(n)
// SPACE COMPLEXITY : O(1) as we use only constant extra space for two pointers p1 and p2
