// Question Link :-
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

// Starter Code :-
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {

// };

var maxProfit = function (prices) {
  let profit = 0;
  const n = prices.length;

  for (let i = 1; i < n; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1]; // 4, 7
    }
  }

  return profit; // 7
};

// [7,1,5,3,6,4]

// Approach :-
// 1. create a variable profit (starting at 0)
// 2. iterate through prices from 2nd element to end
//      a. if current value is greater than previous value
//              i. Update profit to difference of current value and previous value
// 3. Return profit

// TIME COMOPLEXITY : O(n) where n is the length of prices array
// SPACE COMPLEXITY : O(1)
