const strTo = (str) => {
    let strArr = str.split('-');
    let res = '';
    for(let i = 0 ; i < strArr.length ; i++){
        let s = i === 0 ?  strArr[i] : strArr[i][0].toUpperCase() + strArr[i].slice(1);
        res = res + s;
    }
    return res;
}
let res = strTo('hello-my-baby')
console.log(res)