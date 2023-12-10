/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    let tmatrix = [];

    for (let i = 0; i < matrix[0].length; i++) {
        let col = [];
        for (let j = 0; j < matrix.length; j++) {
            col.push(matrix[j][i]);

        }
        tmatrix.push(col);
    }
    return tmatrix;
};

