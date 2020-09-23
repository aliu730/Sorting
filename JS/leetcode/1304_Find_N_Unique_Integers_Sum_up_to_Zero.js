/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    // Even n case
    let result = [];
    let mid = n / 2;
    let count = 1;
    let backCount = 0;
    let odd = false;
    if (n%2 !== 0) {
        odd = true;
        n = n-1;
        mid = n / 2;
    }
    for (let i = 0; i < n; i++) {
        if (i >= mid) {
            result[i] = result[backCount] * -1;
            backCount++;
        } else {
            result[i] = count;
            count++;
        }
    }
    if (odd) {
        result.push(0);
    }
    return result;
};
