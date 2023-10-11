let arr = [];

function flat1(arr){
    return Array.isArray(arr)?[...flat1()]
}
