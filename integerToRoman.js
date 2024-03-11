// Question Link :-
// https://leetcode.com/problems/integer-to-roman/description/

// Starter Code :-
/**
 * @param {number} num
 * @return {string}
 */
// var intToRoman = function(num) {

// };

// Solution :->

var intToRoman = function (num) {
  const romanMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let result = "";

  for (const pair of romanMap) {
    while (num >= pair.value) {
      result += pair.symbol;
      num -= pair.value;
    }
  }

  return result;
};

// s = "MCMXCIV"

// Approach :-
// 1. initialise an array romanMap which contains objects with roman numeral value with corresponding symbol.
//    The value pairs should be decreasing in order as we will start converting from largest to smallest.
// 2. initialise result variable to empty string to store the output.
// 3. iterate through the romanMap array
//      i.      scheck if num is greater than or equal to current value and until it is true
//              a.  update result by adding the corresponding symbol to result.
//              b.  subtract current roman numeral value from num as it is already added to result
// 4. return result

// TIME COMOPLEXITY : O(n) where n is the length of input number num
// SPACE COMPLEXITY : O(1)
