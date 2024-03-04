// Question Link :-
// https://leetcode.com/problems/majority-element/description/

// Starter Code :-
/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {

// };

var majorityElement = function (nums) {
  let count = 0;
  let candidate = null;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};

//[2,2,1,1,1,2,2]

// candidate = 2, count = 1, num = 2
// candidate = 2, count = 2, num = 2
// candidate = 2, count = 1, num = 1
// candidate = 2, count = 0, num = 1
// candidate = 1, count = 1, num = 1
// candidate = 1, count = 0, num = 2
// candidate = 2, count = 1, num = 2

// Approach :-
// 1. Create a variable count (starting at 0) and candidate (with initial value of null)
// 2. loop through nums
//      a. if count is 0
//          i. Set candidate to current value
//      b. if current value equal to candidate
//          i. increment count by 1
//          ii. decrementcount by 1
// 3. return candidate

// TIME COMOPLEXITY : O(n) where n is the length of nums array
// SPACE COMPLEXITY : O(1)
