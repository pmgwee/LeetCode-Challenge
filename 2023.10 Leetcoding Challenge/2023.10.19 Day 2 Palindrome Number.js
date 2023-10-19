/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

    const strX = x.toString();

    let left = 0;
    let right = strX.length - 1;

    while (left < right) {
        if (strX[left] !== strX[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;

};