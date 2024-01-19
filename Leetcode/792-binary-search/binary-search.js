/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (target === array[i]) return i;
  }
  return -1;
};

let nums = [-1, 0, 3, 5, 9, 12];
const result = search(nums, 9);
console.log(result);