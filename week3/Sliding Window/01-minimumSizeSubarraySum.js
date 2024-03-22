// Question Link :-
// https://leetcode.com/problems/minimum-size-subarray-sum/description/

// Starter Code :-
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function (target, nums) {

// };

var minSubArrayLen = function (target, nums) {
  let minLength = Infinity;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};

// Approach :-

// 1. Initialise minLength to infinity, sum to 0 and left pointer to 0
// 2. traverse through nums array using for loop by initialising right pointer from start to end of nums array
//       2.1.  Adding elements to sliding window using sum by adding current element to it
//       2.2.  Using while loop until sum is >= target so we can remove the elements from left pointer if this condition fails
//              2.2.1.  update minLength ti minimum value of minLength and last element of sliding window (right - left + 1)
//              2.2.2.  remove the last element of sliding winidow i.e. at left pointer (sum -= nums[left])
//              2.2.3.  increment left pointer by 1
// 3. if minLength is Infinity then return 0 or else return minLength

// TIME COMPLEXITY : O(n) where n is the length of input array nums
//                    For the worst case both the pointers will traverse through the array only once so overall O(n) time complexity
// SPACE COMPLEXITY : O(1) as we use extra space only for storing values of sum, minimumLength, left and right pointers.
