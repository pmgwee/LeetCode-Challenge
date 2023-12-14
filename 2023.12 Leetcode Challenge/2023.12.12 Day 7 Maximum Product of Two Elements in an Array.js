/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function (nums) {
    let max1 = Math.max(...nums);
    let index1 = nums.indexOf(max1);
    nums.splice(index1, 1);
    let max2 = Math.max(...nums);
    let index2 = nums.indexOf(max2);

    return (max1 - 1) * (max2 - 1);
};
