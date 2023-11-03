/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * 双指针 
 * 
 */

const longLenStr = ( str ) => {
    if(str.length === 1) return 1;
    let i = 0 , res = 0;
    for(let j = 1 ; j < str.length ;j++){
        let char = str[j];
        while( str.slice(i,j).indexOf(char) !== -1){
            i++
        }
        res = Math.max(res,j-i+1);
    }
    return res

}


let s = "abcabcbb";