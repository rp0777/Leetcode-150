// Question Link :-
// https://leetcode.com/problems/rotate-array/description/

// Starter Code :-
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {

//  };

var rotate = function (nums, k) {
  k %= nums.length; // if k is greater than nums.length then one cycle is completed that means it will remain the same and we have to do remainder shifts

  let reverse = function (i, j) {
    while (i < j) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  };
  reverse(0, nums.length - 1);
  reverse(0, k - 1);
  reverse(k, nums.length - 1);
};

// [7,6,5,4,3,2,1] Reverse
// [5,6,7,4,3,2,1] Reverse first part from 0 to k - 1
// [5,6,7,1,2,3,4] Reverse from k to n - 1

// Approach :-
// 1. Reverse the whole array first
// 2. Reverse first part of array from 0 to k - 1
// 3. Reverse remaining part from k to n - 1

// Write a reverse function which uses while loop until the start to end of array cross each other

// TIME COMOPLEXITY : O(n) where n is the length of nums array
// SPACE COMPLEXITY : O(1)
