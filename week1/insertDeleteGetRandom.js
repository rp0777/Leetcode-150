// Question Link :-
// https://leetcode.com/problems/insert-delete-getrandom-o1/description/

// Starter Code :-

var RandomizedSet = function () {};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// Solution :->

var RandomizedSet = function () {
  this.indexes = new Map();
  this.nums = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.indexes.has(val)) return false;
  this.indexes.set(val, this.nums.length);
  this.nums.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.indexes.has(val)) return false;

  const index = this.indexes.get(val);
  const lastElement = this.nums[this.nums.length - 1];
  this.nums[index] = lastElement;
  this.nums.pop();
  this.indexes.set(lastElement, index);
  this.indexes.delete(val);

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.nums.length);
  return this.nums[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

//
// Approach :-
// A. RandomizedSet() Class
// 1. First declared a map to store indexes of elements and an nums to store the elements

// B. insert(value) method
// 1. if the value exists in the indexes map then return false as the value already exists so it cannot be added
// 2. add this value to the indexes map along with it's index to be length of nums
// 3. add this value to nums by using nums.push(value)
// 4. Return true

// C. remove(value) method
// 1. if the value does not exists in the indexes map then return false as the value is not present in nums so it cannot be removed
// 2. initialise a variable index equal to the index of value in indexes map
// 3. initialise a variable lastElement equal to the last element of nums array
// 4. assign the the lastElement value to the element in nums at index (nums[index])
// 5. remove the last element from nums array using pop() method
// 6. set the lastElement in indexes map to index using this.indexes.set(lastElement, index)
// 7. remove the value from indexes map using delete method
// 8. return true

// D. getRandom() method
// 1. initialise a variable randomIndex which uses math.random method to find a random index from nums array
// 2. return the element at index = randomIndex of nums array

// Time Complexity:

// Insert Operation (insert):
// The time complexity of inserting an element into a Map is O(1).
// Appending an element to an array also takes O(1) time on average.
// Therefore, the overall time complexity of the insert operation is O(1).

// Remove Operation (remove):
// Similar to the insert operation, deleting an element from a Map and an array both take O(1) time on average.
// Therefore, the overall time complexity of the remove operation is O(1).

// Get Random Operation (getRandom):
// Generating a random index within the range of the array length takes O(1) time.
// Accessing an element from an array by index also takes O(1) time on average.
// Therefore, the overall time complexity of the getRandom operation is O(1).

// Space Complexity:

// Map:
// The map stores each element of the set along with its index in the array.
// The space complexity of the map is O(n), where n is the number of unique elements in the set.

// Array:
// The array stores all the elements of the set.
// The space complexity of the array is also O(n), where n is the number of unique elements in the set.

// Overall, the space complexity of the RandomizedSet class implementation is O(n), where n is the number of unique elements in the set. The time complexity of all operations (insert, remove, getRandom) is O(1) on average, meeting the problem's requirements.
