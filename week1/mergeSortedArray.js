// Question Link :-
// https://leetcode.com/problems/merge-sorted-array/description/

// Starter Code :-
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {

// };

var merge = function (nums1, m, nums2, n) {
  // Using for loop (without sort method)

  //   let first = m - 1;
  //   let second = n - 1;

  //   for (let i = m + n - 1; i >= 0; i--) {
  //     if (second < 0) {
  //       break;
  //     }

  //     if (nums1[first] > nums2[second]) {
  //       nums1[i] = nums1[first];
  //       first--;
  //     } else {
  //       nums1[i] = nums2[second];
  //       second--;
  //     }
  //   }

  // Using sort method
  for (let i = 0; i < n; i++) {
    nums1[i + m] = nums2[i];
  }

  nums1.sort((a, b) => a - b);
};

// Without Sort Method

// TIME COMPLEXITY : O(m+n) where m is the length of nums1 and n is the length of nums2
// SPACE COMPLEXITY : O(1)

// Sort Method

// TIME COMPLEXITY : O((m+n)log(m+n)) or O(n)
// The overall time complexity of the given code would then depend on the relationship between the lengths of nums1 and nums2. If n is significantly smaller than m, the time complexity would be dominated by sorting, resulting in O((m + n) * log(m + n)).
// However, if n is close to or larger than m, then the time complexity would be closer to O(n) due to the loop.

// SPACE COMPLEXITY : O(1)
