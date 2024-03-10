// Question Link :-
// https://leetcode.com/problems/h-index/description/

// Starter Code :-
/**
 * @param {number[]} citations
 * @return {number}
 */
// var hIndex = function (citations) {

// };

var hIndex = function (citations) {
  citations.sort((a, b) => b - a);
  let index = 1;
  let array = 0;
  let count = 0;
  while (index <= citations.length) {
    if (citations[array] >= index) {
      count++;
    }
    array++;
    index++;
  }
  return count;
};

// [3,0,6,1,5]
// [6,5,3,1,0]

// index = 1, count = 1, array = 1
// index = 2, count = 2, array = 2
// index = 3, count = 3, array = 3
// index = 4, count = 3. array = 4
// index = 5, count = 3. array = 5

//
// Approach :-
// 1. Sort the array in descending oroder
// 2. Initialise index = 1 (to track indexes), array = 0 (to track array elements), count = 0 (to keep track of counts)
//      i. if true then increment count
// 3. Increment array and index
// 4. Return count

// TIME COMOPLEXITY : O(nlogn) where n is the length of nums array
//        As the sorting algorithm takes O(nlogn) time comlexity so it will be O(n)
// SPACE COMPLEXITY : O(1)
