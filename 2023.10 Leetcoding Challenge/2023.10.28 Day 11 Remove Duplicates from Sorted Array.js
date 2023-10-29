/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {

    if (nums.length === 0) {
        return 0;
    }

    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != nums[i + 1]) {
            nums[count] = nums[i]
            count++
        }
    }
    return count
};