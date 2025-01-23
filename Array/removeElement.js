// Leetcode 27 Remove Element; remove duplicate occurence


// Approach:-  just fill the unique elemnt from the start in array with the help of K variable and return k

var removeElement = function (nums, val) {
    const len = nums.length;
    let k = 0;

    for (let i = 0; i < len; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k = k + 1;
        }
    }
    return k;
}


/*

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]

*/