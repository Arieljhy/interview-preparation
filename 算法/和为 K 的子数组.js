/**
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。
 * 子数组是数组中元素的连续非空序列。
 */
var subarraySum = function(nums, k) {
    let count = 0, prefixSum = 0;
    const map = {0: 1};

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        map[prefixSum - k] && (count += map[prefixSum - k]);
        map[prefixSum] ? map[prefixSum]++ : (map[prefixSum] = 1);
    }

    return count;
};