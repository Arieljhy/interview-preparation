/**
 * 二分法 实现 findIndex
 * 查找前 数组 必须排序
 * 
 */
const findIndex = (arr,target,left = 0,right = arr.length - 1) => {
    if(left > right ) return -1
    let mid = Math.floor(arr.length / 2);
    if(arr[mid] === target) return mid;
    if(arr[mid] > target){
        right = mid;
    }else{
        left = mid;
    }
    return findIndex(arr,target,left,right);

}
const find = (arr, target , left = 0 , right = arr.length -1)=>{
    if(left < right) return false;
    let mid = Math.floor(arr.length / 2);
    if(arr[mid] === target) return true;
    if(arr[mid] > target){
        right = mid;
    }else{
        left = mid;
    }
    return find(arr,target,left,right)
}