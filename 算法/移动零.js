const moveZeroes = (nums) => {
    let i = 0, j = 0;
    while (i < nums.length) {
        if (nums[i]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
        i++;
    }
}

let nums = [0, 1, 0, 3, 12];
moveZeroes(nums)
console.log(nums)
