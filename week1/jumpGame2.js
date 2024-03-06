// Question Link :-
// https://leetcode.com/problems/jump-game-ii/description/

// Starter Code :-
/**
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function (nums) {

// };

var jump = function (nums) {
  if (nums.length === 1) return 0; // If there's only one element, no need to jump

  let maxReach = nums[0]; // Maximum index you can reach from the current position
  let steps = nums[0]; // Number of steps you can still take
  let jumps = 1; // Number of jumps needed

  for (let i = 1; i < nums.length; i++) {
    if (i === nums.length - 1) return jumps; // If reached the last index, return jumps
    maxReach = Math.max(maxReach, i + nums[i]); // Update the maximum reachable index
    steps--; // Use one step

    if (steps === 0) {
      // If no more steps remaining
      jumps++; // Increase jumps
      steps = maxReach - i; // Update steps to the remaining distance
    }
  }

  return jumps;
};

// Greedy algorithm
// https://dev.to/albertywu/bag-it-up--greedy-algorithms-in-javascript-3gac

// TIME COMOPLEXITY : O(n) where n is the length of prices array
// SPACE COMPLEXITY : O(1)

// ChatGPT explanation of Greedy Algorithm

// A greedy algorithm is an approach to solve problems by making the locally optimal choice at each step with the hope of finding a global optimum. In other words, at each step of the algorithm, it selects the best available option without considering the consequences of that choice in the future steps.

// Here are some key characteristics of greedy algorithms:

// Greedy choice property: A global optimum can be reached by consistently making locally optimal choices. This means that at each step, the algorithm chooses the most beneficial option without considering future choices.

// Optimal substructure: The problem can be divided into subproblems, and the optimal solution to the problem can be constructed from the optimal solutions of its subproblems. This property ensures that making a greedy choice at each step will lead to an optimal solution overall.

// No backtracking: Greedy algorithms make decisions based only on the current state and do not reconsider previous decisions. Once a decision is made, it is not revisited or undone.

// Efficiency: Greedy algorithms often have efficient implementations because they typically involve iterating through the input once or a few times, making local decisions at each step.

// However, it's important to note that not all problems can be solved optimally using greedy algorithms. Sometimes, a greedy approach may lead to a suboptimal solution. Therefore, it's crucial to analyze the problem carefully to determine whether a greedy strategy is appropriate and whether it will yield the desired result. Additionally, proving the correctness of a greedy algorithm often requires a rigorous proof technique called "greedy exchange" or other mathematical techniques.
