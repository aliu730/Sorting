let unSortedArray = [1,5,3,2,8,9,0,12,31,4];

let mergeSort = (unsorted) => {

    // Takes in a left and right chunk to output a merged sorted
    let mergeSorter = (left, right) => {
        let l = 0;
        let r = 0;
        let result = [];
        while (l < left.length && r < right.length) {
            if (left[l] < right[r]) {
                result.push(left[l]);
                l++;
            } else {
                result.push(right[r]);
                r++;
            }
        }

        while (l < left.length) {
            result.push(left[l]);
            l++;
        }

        while (r < right.length) {
            result.push(right[r]);
            r++;
        }
        return result;
    };

    let mergeAfterBreak = (arr) => {
        if (arr.length == 1) {
            return arr;
        } else {
            let mid = Math.floor(arr.length / 2);
            return mergeSorter(mergeAfterBreak(arr.slice(0, mid)), mergeAfterBreak(arr.slice(mid)));
        }
    };
    return mergeAfterBreak(unsorted);
};

console.log(mergeSort(unSortedArray));
