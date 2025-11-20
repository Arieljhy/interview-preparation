//最长回文子串
const longOfStr = (s) => {
   const len = s.length;
   let res = '';
   const dp = new Array(len).fill().map(() => new Array(len).fill(false));

   for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
        dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
        if (dp[i][j] && res.length < j - i + 1) res = s.slice(i, j + 1);
    }
   }
   return res;
}
