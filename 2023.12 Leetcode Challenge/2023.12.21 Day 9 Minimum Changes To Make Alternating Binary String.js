/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
    // s  = input string
    // 00/11 -> not alternating (equal) change to  01/10 -> alternating (no equal)
    // minimum number of operations

    if (s.length == 0) {
        return -1;
    }

    let count0 = count1 = 0;

    for (let i = 0; i < s.length; i++) {
        if (i % 2 == 0) {
            if (s[i] == '0') count0++
            if (s[i] == '1') count1++
        } else {
            if (s[i] == '1') count0++
            if (s[i] == '0') count1++
        }
    }
    return Math.min(count0, count1);


};