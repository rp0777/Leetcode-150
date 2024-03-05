// Question Link :-
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

// Starter Code :-
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {

// };

var maxProfit = function (prices) {
  // [7,1,5,3,6,4]
  const n = prices.length;
  let minPrice = prices[0]; // 7
  let maxProfit = 0;

  for (let i = 0; i < n; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice); // 0, 0, 4, 4, 5, 5
    minPrice = Math.min(minPrice, prices[i]); // 7, 1, 1, 1, 1, 1
  }

  return maxProfit;
};

// Approach :-
// 1. create a variable minPrice (starting at prices[0]) & maxProfit (starting at 0)
// 2. iterate through prices
//      i. Update maxprofit to maximum of (it's old value & difference between current value & minPrice)
//      ii. Update minPrice to minimum of (minPrice & current value)
// 3. Return maxProfit

// TIME COMOPLEXITY : O(n) where n is the length of prices array
// SPACE COMPLEXITY : O(1)
