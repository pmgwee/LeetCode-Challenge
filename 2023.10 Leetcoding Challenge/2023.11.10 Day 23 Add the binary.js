/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    if (a.length == 0 && b.length == 0) {
        return 0;
    }

    dec1 = BigInt("0b" + a);
    dec2 = BigInt("0b" + b);
    addition = dec1 + dec2;
    sumOfString = addition.toString(2);

    return sumOfString;
};