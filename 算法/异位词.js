var findAnagrams = function(s, p) {
    let res = [], len1 = s.length, len2 = p.length;

    const sortStr = (str) => {
        return str.split('').sort().join('');
    }

    for (let i = 0; i < len1 - len2; i++) {
        const str = s.slice(i, i + len2);
        console.log(sortStr(str), sortStr(p))
        if (sortStr(str) === sortStr(p)) {
            res.push(i)
        }
    }
    return res;
};

let s = "cbaebabacd";
let p = "abc";

console.log('11', findAnagrams(s, p))