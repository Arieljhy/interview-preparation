const longOfStr = ( nums )=>{
    let dp = new Array(nums.length + 1);
     dp[0] = 1;
     let res = 1;
     for(let i = 0 ; i < nums.length ; i++){
        let count = 1;
        for(let j = i ; j >=0 ; j--){
            if(dp[j] > dp[i]){
               count = Math.max( dp[j] + 1 ,count);
            } 
        }
        dp[i] = count;
        res = Math.max(dp[i],res);
     }
     return res;
}