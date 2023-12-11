/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    if (arr.length == 0) {
        return;
    }
    let counts = [];
    for (let s of arr) {
        counts[s] = counts[s] ? counts[s] + 1 : 1;
        if (counts[s] > (0.25 * arr.length)) {
            return s;
        }
    }
};