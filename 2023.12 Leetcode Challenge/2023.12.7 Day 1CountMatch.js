/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
    if (n == 1) {
        return 0;
    }
    let acc = 0;
    let team = 0;
    for (let i = 0; n > 2; i++) {
        if (n % 2 == 0) {
            acc = acc + (n / 2);
            team = n / 2;
        } else {
            acc = acc + ((n - 1) / 2);
            team = ((n - 1) / 2) + 1;
        }
        n = team;
    }

    return acc + 1;
};