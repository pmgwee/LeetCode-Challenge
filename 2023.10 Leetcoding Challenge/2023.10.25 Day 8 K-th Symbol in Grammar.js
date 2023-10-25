/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

//  Table n rows,occurence, k index in the n-row
//  0(k1)         1(k2)    → row 2
//    0(k1) 1(k2)   1(k3) 0(k4)  → row 3
var kthGrammar = function (n, k) {
    if (n === 1) {
        return 0;
    }
    const parent = kthGrammar(n - 1, Math.ceil(k / 2));
    const isOdd = k % 2 === 1;

    if (parent === 1) {
        return isOdd ? 1 : 0;
    } else {
        return isOdd ? 0 : 1;
    }
};