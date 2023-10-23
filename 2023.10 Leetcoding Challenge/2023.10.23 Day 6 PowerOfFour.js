/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n <= 0) {
        return false; // 0 and negative numbers are not powers of four
    }
    if ((n & (n - 1)) !== 0) {
        return false;
    }
    return (n & 0x55555555) !== 0;



};