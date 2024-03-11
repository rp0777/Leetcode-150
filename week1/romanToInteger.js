// Question Link :-
// https://leetcode.com/problems/roman-to-integer/description/

// Starter Code :-
/**
 * @param {string} s
 * @return {number}
 */
// var romanToInt = function(s) {

// };

// Solution :->

var romanToInt = function (s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanValues[s[i]];

    if (currentValue < prevValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
};

// s = "MCMXCIV"

// Approach :-
// 1. create an object to store integer values of corresponding roman values.
// 2. initialise 2 variables result and prevValue to store the final answer and to keep track of previous value, both equalt to 0.
// 3. traverse through s in reverse order from n-1 to 0 where n is the length of string s
//      i.      store the current integer value of roman character of s in currentValue variable
//      ii.     if currentValue is less than previousValue
//              a.  result should be equal to the difference of result & currentValue
//              b.  else update result by adding current value to it
//      iii.    update previous value to current value so that it is stored for the next iteration
// 4. return result

// TIME COMOPLEXITY : O(n) where n is the length of input string s
//          ->  As were are traversing through the string s only once & other operation take constant time
// SPACE COMPLEXITY : O(1) as all the storage space is constant and independent of input size.
