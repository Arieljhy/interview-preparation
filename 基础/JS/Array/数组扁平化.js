let arr = [1, [2, [3, [4, 5, 6, [7, 8, 9, 10] ] ] ] ];

const flat1 = (arr) => {
    while(arr.some(item => Array.isArray(item))){
         arr = [].concat(...arr);
    }
    return arr;
}

const flat2 = (arr) => {
    return arr.reduce((prev, cur) => {
        return Array.isArray(cur) ? [...prev, ...flat2(cur)] : [...prev, cur];
    }, [])
}
console.log(flat2(arr));
