// Question Link :-
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

// Starter Code :-
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function (numbers, target) {

// };

var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1,
    sum = 0;

  while (left < right) {
    sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [++left, ++right];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
};

// Approach :-

// 1. Initialise 2 pointers left=0 and right=numbers.length-1 along with sum variable to keep track of the sum
// 2. We will use while loop until left is less than right
//      i.   update sum to sum of elements of height array at indexes left and right
//      ii.  if sum is equal to target we will return left+1 and right+1
//      iii. else if sum is greater than target we will increment right pointer by 1
//      iv.  else we will increment left pointer by 1

// TIME COMPLEXITY : O(n) where n is the length of numbers array
//                    we are traversing upto n times in the worst case so O(n)
// SPACE COMPLEXITY : O(1) as we use only constant extra space for two pointers left and right, and sum variable.
