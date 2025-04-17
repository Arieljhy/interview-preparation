/**
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。
 * 你可以按任意顺序返回答案。
 */

let arr = [-1,0,1,2,-1,4,-4];

const twoSum = (nums, target) => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const n1 = nums[i];
        const n2 = target - nums[i];
        if (map.has(n2)) {
            return [i, map.get(n2)];
        }
        map.set(n1, i);
    }
}
console.log(twoSum(arr, 6))