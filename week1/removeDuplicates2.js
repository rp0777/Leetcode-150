// Question Link :-
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/

// Starter Code :-
/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function(nums) {

// };

var removeDuplicates = function (nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count < 2 || nums[i] > nums[count - 2]) {
      nums[count++] = nums[i];
    }
  }

  return count;
};

// [1,1,1,2,2,3]

// i = 0, count = 0, [1,1,1,2,2,3]
// i = 1, count = 1, [1,1,1,2,2,3]
// i = 2, count = 2, [1,1,1,2,2,3]
// i = 3, count = 3, [1,1,2,2,2,3]
// i = 4, count = 4, [1,1,2,2,2,3]
// i = 5, count = 5, [1,1,2,2,3,3]

// Approach :-
// 1. Create a variable count (starting at 0)
// 2. loop through nums
//      a. if count is less than 2 OR current value is greater than nums[count-2]
//          i. Set nums[count] to current value
//          ii. increment count
// 3. return count

// TIME COMOPLEXITY : O(n) where n is the length of nums array
// SPACE COMPLEXITY : O(1)
