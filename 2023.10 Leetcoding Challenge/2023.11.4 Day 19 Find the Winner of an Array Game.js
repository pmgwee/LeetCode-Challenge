/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
    if (arr.length === 0) return 0;

    let count = 0;
    let winner = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > winner) {
            winner = arr[i];
            count = 1;
        } else {
            count++;
        }

        if (count === k) {
            break;
        }
    }

    return winner;
};
