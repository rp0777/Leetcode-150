// Question Link :-
// https://leetcode.com/problems/3sum/description/

// Starter Code :-
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {

// };

var threeSum = function (nums) {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let left = i + 1;
      let right = nums.length - 1;
      const target = -nums[i];

      while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[left], nums[right]]);

          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
};

// Approach :-

// if triplet has [a,b,c] where a+b+c=0 then -a = b+c

// 1. Initialise and empty array result to store the triplets
// 2. sort the nums array in ascending order to make it easier to handle duplicates and later using two pointer approach
// 3. Using for loop to iterate through each element of nums array from index 0 to nums.length-2 as triplet will take the last 2 elements
//        3.1. using if loop to ensure if the current element is the first element (i==0) & if it is not the first element and it is different from previous one (i>0 && nums[i]  !== nums[i-1])
//              3.1.1.  initialise the left and right pointers as i+1 and nums.length-1 and target variable as -nums[i]
//              3.1.2.  Now use while loop until left pointer < right pointer
//                       3.1.2.1.  initialise a variable sum to store the sum of current value of element of nums at left & right pointers
//                                 3.1.2.1.1.  if sum === target then push the triplet of current element, left & right pointer element to result
//                                  3.1.2.1.2.  while left < right & current left element not equal to next left element increment left by 1 (to remove duplicates)
//                                  3.1.2.1.3.  while left < right & current right element not equal to next right element decrement right by 1 (to remove duplicates)
//                                  3.1.2.1.4. increment both left and right pointers by 1
//                      3.1.2.2.  else if sum is less than target increment left by 1
//                      3.1.2.3.  else decrement right by 1
// 4. finally return result array

// TIME COMPLEXITY : O(n^2) where n is the length of input array nums
//                    For the worst case we will be traversing through nums array in outer loop and then using 2 pointer approach we will traverse through it again. so O(n-2) & O(n-2) hence O(n^2)
// SPACE COMPLEXITY : O(n) where n is the length of input array nums
//                    as we use ant extra space for storing result array which has nested arrays of const space of 3 elements.
