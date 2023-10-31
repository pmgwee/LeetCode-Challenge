/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    arr.sort((a, b) => {
        let regEx = /1/g;
        let x = a.toString(2).match(regEx)?.length || 0;
        let y = b.toString(2).match(regEx)?.length || 0;

        return x - y || a - b;
    })
    return arr;
};