// Question Link :-
// https://leetcode.com/problems/container-with-most-water/description/

// Starter Code :-
/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {

// };

var maxArea = function (height) {
  let maximumArea = -Infinity,
    area = 0;
  let left = 0,
    right = height.length - 1;

  while (left < right) {
    area = Math.min(height[left], height[right]) * (right - left);

    maximumArea = Math.max(maximumArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maximumArea;
};

// Approach :-

// 1. Initialise maximumArea variable to negative Infinity to keep track of max area and area to 0 to store current area
// 2. Initialise 2 pointers left and right from the start and end of height array
// 3. Using while loop with condition left less than right to traverse through height array
//      i.   update area to the product of (minimum of left indexed and right indexed height) and (difference between right and left pointer)
//      ii.  update maximumArea to maximum of its current value and area
//      iii. if left indexed height is less than right indexed height then increment left pointer by 1
//      iv.  else decrement right pointer by 1
// 4. return maximumArea

// TIME COMPLEXITY : O(n) where n is the length of height array
//                    we are traversing upto n times in the worst case so O(n)
// SPACE COMPLEXITY : O(1) as we use only constant extra space for two pointers left and right, and maximumArea & area variables.
