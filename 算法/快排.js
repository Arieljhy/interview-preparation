/**
 * 快排思想：
 *    给定一个数组，选取一个基准值，小于基准值 放在左边，大于基准值 放在右边
 */
let arr = [10,2,7,4,1,1,2,4,6,8,1,1,34,56,7,9,33];
const quickSort = (arr , left = 0 , right = arr.length -1) => {
    if(left < right){
        let priotIndex  = partition(arr,left,right);
        quickSort(arr, left, priotIndex-1);
        quickSort(arr, priotIndex+1 , right);
    }
    return arr
}
const partition = (arr,left,right) => {
    let priot = arr[right];
    let i = left - 1;
    for(let j = left ; j < right ; j++){
        if(arr[j] < priot){
            i++;
            [arr[i],arr[j]] =  [arr[j],arr[i]];
        }
    }
    [arr[i+1] , arr[right]] = [arr[right] , arr[i+1]];
    return i+1
}
const partition1 = (arr,left,right) => {
    let pivot = arr[left];
    let j = right+1;
    for(let i = right ; i > left ; i--){
        if(arr[i] > pivot){
            j--;
            [arr[i],arr[j]] =  [arr[j],arr[i]];
        }
    }
    [arr[left],arr[j-1]] =  [arr[j-1],arr[left]];
    return j-1;
}
// console.log(quickSort(arr,0,arr.length-1))
/**
 * 结合 api 简化版
 */
const quickSortSimple = (arr) => {
    if(arr.length < 2) return arr
    let priot = arr.pop();
    let partLeft = arr.filter((num)=>num<=priot);
    let partRight = arr.filter((num)=>num>priot);
    return [...quickSortSimple(partLeft,0,partLeft.length-1),priot,...quickSortSimple(partRight,0,partRight.length-1)];
}
console.log("quickSortSimple:",quickSortSimple(arr));
