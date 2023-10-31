/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
    var newArray = [pref[0]];
    if (pref.length === 1) {
        return pref;
    }

    for (let i = 1; i < pref.length; i++) {
        // console.log(pref[i])
        newArray.push(pref[i - 1] ^ pref[i]);
    }
    return newArray;

    // for (i of pref){
    //     pref[i] = newArray[0] ^ newArray[i];
    //    newArray.push(i)
    // }



};