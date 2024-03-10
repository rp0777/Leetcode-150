// Question Link :-
// https://leetcode.com/problems/gas-station/description/

// Starter Code :-
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// var canCompleteCircuit = function(gas, cost) {

// };

// Solution :->

var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0;
  let totalCost = 0;
  let tank = 0;
  let startStation = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i]; // 1,3,6,10,15              // 2,5
    totalCost += cost[i]; // 3,7,12,13,15           // 3,7
    tank += gas[i] - cost[i]; // -2,-2,-2,3,6       // -1,-1,1

    // If the tank becomes negative, reset the start station to the next station
    if (tank < 0) {
      startStation = i + 1; // 1,2,3                // 1,2
      tank = 0;
    }
  }

  // If total gas is less than total cost, it's impossible to complete the circuit
  if (totalGas < totalCost) {
    // true
    return -1; // -1
  }

  // Otherwise, return the potential starting station
  return startStation; // 3
};

// gas = [1,2,3,4,5], cost = [3,4,5,1,2]
// gas = [2,3,4], cost = [3,4,3]

// Approach (Greedy algorithm -> choose the optimal solution for sub problem greedy exhange) :-
// 1. Initiate totalGas, totalCost, tank and startStation to 0 value
// 2. traverse through gas or cost array
//      i.      keep track of totalGas and totalCost by adding each gas and cost value
//      ii.     add difference of current values of gas and cost to tank variable
//      iii.    If the tank becomes negative, reset the start station to the next station
// 4. If total gas is less than total cost, it's impossible to complete the circuit
// 5. Otherwise, return the potential starting station

// TIME COMOPLEXITY : O(n) where n is the length of gas and cost array
//          ->  As were are traversing through the gas or cost array only once
// SPACE COMPLEXITY : O(1) for tracking the values of totalGas, totalCost, tank and startStation values
