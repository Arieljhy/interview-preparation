/**最长递增子序列 */
const longOfStr = (nums) => {
   const len = nums.length;
   if (!len) return 0;
   const dp = new Array(len).fill(1);
   let res = 1;
   for (let i = 0; i < len; i++) {
      for (let j = 0; j < i; j++) {
         if(nums[j] < nums[i]){
            dp[i] = Math.max(dp[j] + 1 , dp[i]);
         } 
      }
      res = Math.max(dp[i], res);
   }
   return res;
}