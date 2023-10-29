let arr = [-1,0,1,2,-1,4,-4];
const twoSum = (arr,target) => {
    arr.sort((a,b)=>a-b)
    let res = [];
    let left = 0 , right = arr.length -1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(target === sum){
            res.push([arr[left],arr[right]])
            left++;
            right--;
        }else if(target > sum){
            left++
        }else{
            right--
        }
    }
    return res;

}
console.log(twoSum(arr,0))