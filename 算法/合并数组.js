let arr1 = [1,3,5,7,9]
let arr2 = [2,4,6,8,10]

const merge = (arr1, arr2)=>{
    let res = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            res.push(arr1[i]);
            i++;
        }
        else {
            res.push(arr2[j]);
            j++;
        }
    }

    if (i < arr1.length) {
        res= res.concat(arr1.slice(i));
    }

    if (j < arr2.length) {
        res= res.concat(arr2.slice(j));
    }

    return res;
}
let newArr = merge(arr1,arr2);
console.log(newArr);