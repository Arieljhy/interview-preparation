/**
 * 搜索旋转排序数组
 * 整数数组 nums 按升序排列，数组中的值 互不相同，
 * 给你 旋转后 的数组 nums 和一个整数 target，如果 nums 中存在这个目标值 target，则返回它的下标，否则返回 -1 
 */

const search = (nums, target) => {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        if (target === nums[mid]) return mid;

        if (nums[l] < nums[mid]) {
            target < nums[l] || target > nums[mid] ? (l = mid + 1) : (r = mid - 1);
        }
        else {
            target < nums[mid] || target > nums[r] ? (r = mid - 1) : (l = mid + 1);
        }
    }
    return -1;
}