var assert = require('assert');
var MergeSort = require('../MergeSort');
var InsertionSort = require('../InsertionSort');

describe('MergeSort', function () {
    it('Should sort simple unsorted array of numbers', function () {

    let unSortedArray = [1,5,3,2,8,9,0,12,31,4];
    let actual = MergeSort.mergeSort(unSortedArray);
    let expected = [0, 1, 2,  3,  4, 5, 8, 9, 12, 31];
    assert.equal(JSON.stringify(actual), JSON.stringify(expected));
    });
});

describe('InsertionSort', function () {

    it ('Should sort simple unsorted array of numbers', function() {
        let unSortedArray = [1,5,3,2,8,9,0,12,31,4];
        let actual = InsertionSort.insertionSort(unSortedArray);
        let expected = [0, 1, 2,  3,  4, 5, 8, 9, 12, 31];
        assert.equal(JSON.stringify(actual), JSON.stringify(expected));
    });
});