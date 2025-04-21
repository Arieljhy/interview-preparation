const longestFromStr = (str) => {
    let map = str.split('').reduce((res,char) => {
        return res.has(char) ? res.set(char,res.get(char) + 1) : res.set(char, 1);
    }, new Map());
    let res = 0;
    for (let val of map.values()){
        res += Math.floor(val / 2) * 2;
    }
    return res.length !== str.length ? res + 1 : res;
}
