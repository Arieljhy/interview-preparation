const transToStyle = (str)=>{
    let arr = str.split('-');
    let res = '';
    for(let i = 0 ; i < arr.length ; i++){
        let s = arr[i][0].toUpperCase() + arr[i].slice(1);
        res = res+s;

    }
    return res;
}
let res = transToStyle('hello-my-baby')
console.log(res)
