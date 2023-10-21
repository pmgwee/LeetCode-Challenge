/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {

    const romanHash = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000,
    };

    var countI = num;
    var countR = '';
    const romanHashK = Object.keys(romanHash);

    do {
        for (var i = romanHashK.length - 1; i >= 0; i--) {
            if (romanHash[romanHashK[i]] <= countI) {
                countR += Object.keys(romanHash)[i];
                countI -= romanHash[romanHashK[i]];
                console.log('passed first' + i);
                i++;
            }
        }
    } while (countI !== 0);
    return countR;
};