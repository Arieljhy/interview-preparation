// const binary = (arr, target)=>{
//     let left =0 , right = arr.length-1;
//     while(left <= right){
//         const mid = Math.floor((left + right) / 2);
//         if(arr[mid] === target){
//             return true
//         }else if(arr[mid] > target) {
//             right = mid -1 ;
//         }else{
//             left = mid +1;
//         }
//     }
//     return false;
// }

let arr = [2,4,5,1,3,6,8,10];

const binary = (arr,target)=>{
    let left = 0 , right = arr.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(target === arr[mid]){
            return mid
        }else if(target < arr[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        } 
    }
    return -1
}
arr.sort((a,b)=>a-b)
let res = binary(arr,10)
console.log(res)

const binary1 = (arr , target ) => {
    let left = 0 ,right = arr.length -1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(target === arr[mid]){
            return  mid;
        }else if(target < arr[mid]){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return -1
    
}
