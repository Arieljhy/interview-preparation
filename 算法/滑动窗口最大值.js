
let nums = [1,3,-1,-3,5,3,6,7], k = 3;

// 此解法会超出时间限制
const maxSlidingWindow = (nums, k) => {
    const res = [];
    let i = 0, len = nums.length;
     while (i < len - k + 1) {
        let maxNum = nums[i], j = i + 1;
        while (j <= i + k) {
            maxNum = Math.max(maxNum, nums[j]);
            j++;
        }
        res.push(maxNum);
        i++;
     }
     return res;
};

console.log('maxSlidingWindow', maxSlidingWindow(nums, K));