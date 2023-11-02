let arr = [-1,0,1,2,-1,-4]

const threeSum = (arr)=>{
    if(!arr.length) return;
    arr.sort((a,b)=>a-b)
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        let left = i+1 , right = arr.length -1 ;
        let cur = arr[i];
        if( i>0 && arr[i-1] === arr[i] ){
            continue
        }
        while(left < right){
            let sum = arr[left] + arr[right];
            if(cur === (-1) * sum){
                res.push([cur,arr[left],arr[right]])
                while(arr[left] === arr[left + 1]){
                    left++;
                }
                while(arr[right] === arr[right-1]){
                    right--;
                }
                left++;
                right--;
            }else if( cur < (-1) * sum){
                left++;
            }else{
                right--;
            }
        }
    }
    return res
}
console.log(threeSum(arr))