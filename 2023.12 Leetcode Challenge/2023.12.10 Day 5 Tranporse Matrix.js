/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    let tmatrix = [];
    for (let i = 0; i < matrix[0].length; i++) {
        console.log(matrix[0].length);
        let col = [];
        for (let j = 0; j < matrix.length; j++) {
            console.log(matrix.length)
            col.push(matrix[j][i]);
        }
        tmatrix.push(col);
    }
    return tmatrix;
};

let matrix = [[1, 2, 3, 9], [4, 5, 6, 8]];
console.log(transpose(matrix));

