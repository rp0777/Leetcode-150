// Question Link :-
// hhttps://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

// Starter Code :-
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {

// };

var removeDuplicates = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      nums[++j] = nums[i];
    }
  }

  return ++j;
};

// Approach :-
// 1. Create index variable (starting at 0)
// 2. loop through nums
//      a. if current value not equal to val
//          i. Set nums[index + 1] to current value
//          ii. increment index
// 3. return index + 1

// TIME COMOPLEXITY : O(n) where n is the length of nums array
// SPACE COMPLEXITY : O(1)
