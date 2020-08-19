
let insertionSort = (arr) => {
    // Each element iterated over is a "key"
    // Take the key and compare to values on it's left
    //      If the key is less than it's left we swap them until they are not
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j > 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}