// Question Link :-
// https://leetcode.com/problems/candy/description/

// Starter Code :-
/**
 * @param {number[]} ratings
 * @return {number}
 */
// var candy = function(ratings) {

// };

var candy = function (ratings) {
  // [1,0,2]
  const n = ratings.length;
  const candies = new Array(n).fill(1); // Initialize candies array with all elements as 1

  // Iterate from left to right
  for (let i = 1; i < n; i++) {
    // [1,1,2]
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // Iterate from right to left
  for (let i = n - 2; i >= 0; i--) {
    // [2,1,2]
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // Calculate total candies needed
  let totalCandies = 0;
  for (let candyCount of candies) {
    totalCandies += candyCount; // 2,3,5
  }

  return totalCandies; // 5
};

// ratings = [1,0,2]

// Approach :-
// 1. create a new array filled with 1 denoting 1 candy for each child.
// 2. iterate through ratings array from left to right from 1 to n-1
//      i.  if current value of rating is greater than previous value
//            then update current value of candy by adding previous value + 1
// 3. iterate through ratings array from right to left from n-2 to 0.
//      i.  if current rating value is greater than next rating value
//            then update current candy to maximum of current candy value & previous candy value + 1
// 4. create a new variable to store totalCandies
// 5. iterate through candies array and find the sum fo total candies.
// 6. return totalCandies.

// TIME COMPLEXITY : O(n) where n is the length of ratings array
//        We are traversing the ratings array 3 times so O(3n) => O(n)
// SPACE COMPLEXITY : O(n) where n is the lenght of ratings array
//        We are storing the candy counts in a separate array so we are using extra space of length n here
