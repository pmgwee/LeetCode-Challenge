/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = (mat) => {
    count = 0
    var checkNegative = false;

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] == 1 && row_valid(i) == 1 && col_valid(j) == 1) {
                count++;
            }
        }
    }

    function row_valid(i) {
        sum = 0
        for (let j = 0; j < mat[0].length; j++) {
            sum += mat[i][j]
        }
        return sum
    }

    function col_valid(j) {
        sum = 0
        for (let i = 0; i < mat.length; i++) {
            sum += mat[i][j]
        }
        return sum
    }

    return count
};