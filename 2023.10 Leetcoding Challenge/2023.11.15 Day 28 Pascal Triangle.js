/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 0) {
        return [];
    }

    const triangle = [[1]];

    for (let i = 1; i < numRows; i++) {
        var rows = [];
        var prevRows = triangle[i - 1];

        rows.push(1);

        for (let j = 1; j < i; j++) {
            const nums = prevRows[j - 1] + prevRows[j];
            rows.push(nums);
        }

        rows.push(1);

        triangle.push(rows);
    }

    return triangle;

};