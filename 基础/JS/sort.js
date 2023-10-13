let arr = [2,3,1,109,10,9,7,9,2,34,65,7,8,9]
/**
 * 冒泡排序
 */
const sort = (nums) => {
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i ; j < nums.length ; j++){
            if(nums[i] > nums[j])  [nums[i],nums[j]] = [nums[j],nums[i]]; 
        }
    }
    return nums;
}
console.log("冒泡排序:",sort(arr))
// 快排
const quickSort = (nums) => {

}
//二分查找