/**
 * 字符串中 出现最多的 字符 并 返回 其次数
 */
const charNumInStr = (s) => {
    const map = s.split('').reduce((prev, char) => {
        return prev.has(char) ? prev.set(char,prev.get(char) + 1) : prev.set(char, 1);
    }, new Map());

    let key = '' , maxCount = 0;
    for (let [char, count] of map) {
        if (count > maxCount) {
            key = char;
            maxCount = count;
        }
    }

    return [key , maxCount]; 
}

let res = charNumInStr("agvstvgcsbhisvsjahhbbgbgvvccccccccc")
console.log('res', res);