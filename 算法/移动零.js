const moveZeros = (nums)=>{
    let i = 0 , j = 0 ,len = nums.length;
    while(i < len){
        if(nums[i] !== 0){
            [nums[i] , nums[j]] = [nums[j] , nums[i]];
            j++; 
        }
        i++;
    }
}
let nums = [0,1,0,3,12];
moveZeros(nums)
console.log(nums)
