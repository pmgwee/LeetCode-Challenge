/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
    nums.sort(function (a, b) { return a - b })
    let max = 0
    let j = nums.length - 1
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i] + nums[j])
        j--
    }
    return max

};