/**
 * 给你一个整数数组 nums ，
 * 判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
 * 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 */

let arr = [-1,0,1,2,-1,-4]

const threeSum = (nums) => {
    nums.sort((a, b) => a - b);
    const res = [], len = nums.length;

    for (let i = 0; i < len - 1; i++) {
        const n1 = nums[i];
        if (n1 > 0) break;
        if (i > 0 && nums[i - 1] === n1) continue;
        let l = i + 1, r = len -1;
        while (l < r) {
            const n2 = nums[l], n3 = nums[r];
            if (n1 + n2 + n3 === 0) {
                res.push([n1, n2, n3])
                while (l < r && n2 === nums[l]) l++;
                while (l < r && n3 === nums[r]) r--;
            }
            else if (n1 + n2 + n3 < 0) {
                l++;
            }
            else {
                r--;
            }
        }
    }
    return res;
}
console.log(threeSum(arr))