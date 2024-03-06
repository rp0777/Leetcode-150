// Question Link :-
// https://leetcode.com/problems/jump-game/description/

// Starter Code :-
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function (nums) {

// };

var canJump = function (nums) {
  const n = nums.length;
  let target = n - 1;

  for (let i = n - 1; i >= 0; i--) {
    if (i + nums[i] >= target) {
      target = i;
    }
  }

  return target === 0;
};

// Greedy algorithm
// https://dev.to/albertywu/bag-it-up--greedy-algorithms-in-javascript-3gac

// In short, Greedy algorithm is like solve the problem in chunks or brick by brick.
// if the problem canbe divided into sub problems then solve the sub problems immediates on after then other
// Eventually you will end up solving the whole problem.
// Recursive approach can be used here.

// Approach :-
// 1. create a target variable (starting at n-1)
// 2. iterate through nums from n-1 to 0
//      a. if current index + current value is >= target
//              i. Update target to current index
// 3. Return true if target is equal to 0 else return false.

// TIME COMOPLEXITY : O(n) where n is the length of prices array
// SPACE COMPLEXITY : O(1)
