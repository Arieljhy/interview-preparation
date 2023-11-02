// 二分法
const binaryBoolean = (arr , target)=>{
    let left = 0 , right = arr.length -1
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(target === arr[mid]){
            return true
        }else if(target < arr[mid]){
            right = mid -1;
        } else {
            left = mid +1;
        }
    }
   return false
}

//快排
const quickSort = (arr , left = 0 ,right = arr.length -1)=>{
    if(left < right){
        let pivotIndex = partition(arr,left,right);
        quickSort(arr,left,pivotIndex - 1);
        quickSort(arr,pivotIndex + 1,right);
    }
    return arr;
}
const partition = (arr,left,right) => {
    let pivot = arr[right];
    let i = left - 1;
    for(let j = left ; j < right ; j++){
        if(arr[j] < pivot){
            i++;
            [ arr[i] , arr[j] ] = [ arr[j] , arr[i]];
        }
    }
    [ arr[i+1] , arr[right] ] = [ arr[right] , arr[i+1]];
    return i+1;
    
}
let arr = [10,2,7,4,1,1,2,4,6,8,1,1,34,56,7,9,33];
console.log(quickSort(arr))
