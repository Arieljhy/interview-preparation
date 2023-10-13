let arr = [1, [2, [3,[4,5,6,[7,8,9,10]]]]];

function flat1(arr){
    while(arr.some(item => Array.isArray(item))){
         arr = [].concat(...arr);
    }
    return arr 
}
console.log(flat1(arr));
