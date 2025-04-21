/**
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 滑动窗口
 */

const longLenStr = (s) => {
    let res = 0, i = 0, len = s.length;
    while (i < len) {
        let j = i + 1;
        while (j < len && !s.slice(i, j).includes(s[j])) j++;
        res = Math.max(res, j - i);
        i++;
    }
    return res;
}

let s = "abcdabcbb";

console.log(longLenStr(s))