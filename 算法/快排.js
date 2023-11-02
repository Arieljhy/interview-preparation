/**
 * 快排思想：
 *    给定一个数组，选取一个基准值，小于基准值 放在左边，大于基准值 放在右边
 *    时间复杂度  O(nlogn)   O(n^2)
 *    空间复杂度 O(nlogn) O(n)
 */
let arr = [10,2,7,4,1,1,2,4,6,8,1,1,34,56,7,9,33];
const quickSort = (arr , left = 0 , right = arr.length -1)=>{
   if(left < right){
    let pivotIndex = partition(arr,left,right);
    quickSort(arr,left,pivotIndex -1);
    quickSort(arr,pivotIndex+1,right);
   }
   return arr;
}
const partition = (arr,left,right) => {
    let pivot = arr[right];
    let i = left -1;
    for(let j = left ; j < right ; j++){
        if(arr[j] < pivot){
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }
    }
    [arr[i+1],arr[right]] = [arr[right],arr[i+1]];
    return i+1
}

