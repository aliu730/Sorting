// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var rob = function(nums) {
    // Input: nums = [1,2,3,1]
    // Output: 4
    // Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
    //              Total amount you can rob = 1 + 3 = 4.
                
    let prev = 0;
    let beforePrev = 0;

    for (let i = 0; i < nums.length; i++) {
        let temp = prev;
        prev = Math.max(prev, nums[i] + beforePrev);
        beforePrev = temp;
    }
    return prev;
};

console.log(rob([1,2,3,1]));