/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

    s = s.replace(/\s{2,}/g, ' ').trim();
    var word = s.split(" ");
    word.reverse();
    return word[0].length;

};