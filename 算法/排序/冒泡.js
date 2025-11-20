/**
 * 冒泡排序
 */
let arr = [2,3,1,109,10,9,7,9,2,34,65,7,8,9]
const sort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            arr[i] > arr[j] && ([arr[i], arr[j]] = [arr[j], arr[i]]);
        }
    }
    return arr;
} 
console.log("冒泡排序:", sort(arr))