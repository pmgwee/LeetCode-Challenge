/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    result = [];
    k = 0;


    for (let i = 1; i <= n; i++) {
        result.push("Push")
        if (target[k] == i) {
            k++
        } else
            result.push("Pop")

        if (k >= target.length) break
    }
    return result
};