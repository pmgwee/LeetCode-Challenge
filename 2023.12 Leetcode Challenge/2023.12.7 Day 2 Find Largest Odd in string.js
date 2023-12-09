/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    let store = "";
    let temp;
    for (let j = num.length - 1; j >= 0; j--) {

        if (num[j] % 2 != 0) {
            temp = j;
            break;
        }
    }
    for (let i = 0; i <= temp; i++) {
        store += num[i];
    }

    return store;
};