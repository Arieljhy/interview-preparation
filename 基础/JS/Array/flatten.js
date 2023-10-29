let arr = [1,2,[2,[2,3],4,[5,[6,[7]]]]];
// const flatten = (arr)=>{
//     while(arr.some(item=>Array.isArray(item))){
//         arr = [].concat(...arr)
//     }
//     return arr
// }
const flattenByLimit = (arr,limit = 1)=>{
    let res = arr;
    for(let i = 1; i<= limit; i++){
        res = [].concat(...res)
    }
    return res
}
console.log(flattenByLimit(arr,2))

const bigNumberAdd = (num1,num2)=>{
    let i = num1.length - 1 , j = num2.length - 1 , carry = 0;
    let res = '';
    while( i >= 0 || j >= 0 ){
        let n1 = i >= 0 ? parseInt(num1[i]) : 0;
        let n2 = j >= 0 ? parseInt(num2[j]) : 0;
        let sum = n1 + n2 + carry ;
        carry = Math.floor(sum / 10);
        res = `${sum % 10}${res}`;
        i--;
        j--;
    }
    if (carry === 1) res = `1${res}`;
    return res
}

const bigNumAdd = (num1,num2)=>{
    let i = num1.length -1 , j = num2.length -1, carry = 0;
    let res = '';
    while(i >= 0 || j >= 0){
        let n1 = i >= 0  ? parseInt(num1[i]) : 0; 
        let n2 = j >= 0  ? parseInt(num2[j]) : 0; 
        let sum = n1 + n2 + carry;
        carry = Math.floor(sum / 10);
        res = `${sum % 10}${res}`;
        i--;
        j--;
    }
    if(carry === 1) res = `1${res}`;
    return res;
}

const 