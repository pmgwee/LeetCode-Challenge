/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    var sortedArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            sortedArr.push(nums[i]);
        }
    }
    nums.splice(0, nums.length, ...sortedArr);
    return sortedArr.length;

};