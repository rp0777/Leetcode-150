// Question Link :-
// https://leetcode.com/problems/trapping-rain-water/description/

// Starter Code :-
/**
 * @param {number[]} height
 * @return {number}
 */
// var trap = function (height) {

// };

var trap = function (height) {
  if (height.length === 0) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
};

// height = [4,2,0,3,2,5]

// Approach (Two Pointers Approach) :-
// 1. create 2 pointers left and right along with 2 variables leftMax and rightMax to store current max values of both pointer values and another variable water to store water storing capacity
// 2. using while loop unitl left < right
//      i.  if height on left pointer is less than the right pointer one
//            a. then check if height of left pointer is greater than leftMax
//                  if true then update leftMax to height of left pointer
//                  else add difference of leftMax & height at left pointer to water capacity
//          increment left by 1
//      ii. else
//            a. if height of right pointer is greater than or equal to rightMax
//                  if true then update right max to height of right pointer
//                  else add difference of rightMax & height at right pointer to water capacity
//          decrement right by 1
// 6. return water.

// TIME COMPLEXITY : O(n) where n is the length of height array
//        We are traversing the height only once so time complexity will be O(n)
// SPACE COMPLEXITY : O(1) where n is the lenght of height array
//        Only constant or independent of input size extra space is used so it is O(1)
