/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    var reducedArray = [];
    if (nums.length === 0) {
        return init;
    }

    var val1 = init;

    for (let i = 0; i < nums.length; i++) {
        // reducedArray.push(init);
        val1 = fn(val1, nums[i]);
        reducedArray.push(val1);

    }

    return reducedArray;


};

var nums = [1, 2, 3, 4];
fn = function sum(accum, curr) { return accum + curr; }
var init = 0;
console.log(reduce(nums, fn, init));