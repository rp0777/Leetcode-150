// Question Link :-
// https://leetcode.com/problems/remove-element/description/

// Starter Code :-
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function (nums, val) {

// };

var removeElement = function (nums, val) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

// Approach :-
// 1. Create index variable (starting at 0)
// 2. loop through nums
//      a. if current value not equal to val
//          i. Set nums[index] to current value
//          ii. increment index
// 3. return index

// TIME COMOPLEXITY : O(n) where n is the length of nums array
// SPACE COMPLEXITY : O(1)
