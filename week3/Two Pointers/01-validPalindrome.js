// Question Link :-
// https://leetcode.com/problems/valid-palindrome/description/

// Starter Code :-
/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {

// };

var isPalindrome = function (s) {
  s = s.toLowerCase();

  let alphanumericString = "";
  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i);
    if (
      (charCode >= 97 && charCode <= 122) ||
      (charCode >= 48 && charCode <= 57)
    ) {
      alphanumericString += s[i];
    }
  }

  let left = 0;
  let right = alphanumericString.length - 1;

  while (left < right) {
    if (alphanumericString[left] !== alphanumericString[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

// Approach :-

// 1. We will convert the string to lowercase so that we can compare characters without worrying about case sensitivity
// 2. Initialise a variable alphanumericString to empty string in order to store only letters and numbers of the string s
// 3. Traverse through characters of string s to remove non-alphanumeric characters or special characters
//      i.   store ASCII code of current character in charCode variable using charCodeAt() method on string s
//      ii.  if charCode lies in the range of [97-122] i.e. range for a - z and [48-57] i.e. range for 0 - 9
//              a.  concatenate the current character to alphanumericString
// 4. initialise left pointer to start of alphanumericString and right pointer to the end i.e. alphanumericString.length - 1
// 5. Use while loop until left pointer is less than right pointer
//      i.   if left character of alphanumericString is not equal to right one then return false
//      ii.  increment the left pointer by 1 and decrement right pointer by 1
// 6. In the end, we will return true as in the while loop if it was a palindrome then it would have returned false already.

// TIME COMPLEXITY : O(n) where n is the length of input string s
//                    We traverse through string s 2 times in the worst case so O(n) + O(n) = O(n)
// SPACE COMPLEXITY : O(n) where n is the length of input string s
//                    We use an extra space of n length to store alphanumeric characaters of input string s
