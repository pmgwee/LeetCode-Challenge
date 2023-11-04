/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function (n, left, right) {
    let maxLeft = Math.max(...left);
    let maxRight = n - Math.min(...right);
    return Math.max(maxLeft, maxRight);
};

console.log(getLastMoment(7, [4, 3], [0, 1])); // Expected output: 4