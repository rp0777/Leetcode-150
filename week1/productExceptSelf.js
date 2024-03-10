// Question Link :-
// https://leetcode.com/problems/product-of-array-except-self/description/

// Starter Code :-
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) {

// };

var productExceptSelf = function (nums) {
  const n = nums.length;
  const result = new Array(n);

  // Calculate products of all elements to the left of each element and store it in result array
  result[0] = 1;
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // Calculate products of all elements to the right of each element and update result array
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
};

// [1,2,3,4]
// [1,1,2,6]

// [6,8,12,24] -> reverse of result array
// 1,4,12,24,24 -> right product

//
// Approach :-
// 1. Initiate a new array result of length-nums.length
// 2. set result[0]=1
// 3. traverse through result array from n-1 to 0
//      i.  assign current element of result to the product of it's previous value and the same index value of nums array
// 4. initialise rightProduct = 1
// 5. traverse through result array in reverse order from n-1 to 0
//      i.  multiply the current element of result array to rightProduct
//      ii. update the rightProduct to the product of it's current value to current value of nums array (nums[i])
// 6. return result array

// TIME COMOPLEXITY : O(n) where n is the length of nums array
//          ->  As the time complexity for calculating the initial result array that is left product is O(n)
//          ->  And O(n) for updating the result array witht the right product
//          ->  So overall time complexity will be O(n)
// SPACE COMPLEXITY : O(n) where n is the length of nums array
//          ->  As we are using an extra space for result array which of length n so O(n) space
