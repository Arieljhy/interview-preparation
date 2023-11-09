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
//二分

const binary = (arr,target)=>{
    let left = 0 , right = arr.length -1;
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(target === arr[mid]){
            return mid;
        }else if( target < arr[mid]){
            right = mid -1;
        } 
        else {
            left = mid + 1;
        }
    }
    return -1
}

let arr = [10,2,7,4,1,1,2,4,6,8,1,1,34,56,7,9,33];
arr.sort((a,b)=>a-b);
console.log(binary(arr,34))
