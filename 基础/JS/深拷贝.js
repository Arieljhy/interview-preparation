/**
 *   浅拷贝
 *      数组的浅拷贝：
 *          扩展运算符 : 只能拷贝一层;
 *          slice()
 *          concat()
 *      对象常见的浅拷贝:
 *          扩展运算符
 *          Object.assign()
 */
//深拷贝
//JSON.parse(JSON.stringify()) //深层次引用 和 

function deepCopy(target){
    if(target === null || (typeof target !== 'object' && typeof target !== 'function')) return target;
    if(target instanceof RegExp) return new RegExp(target);
    if(target instanceof Date) return new Date(target);
    let newRes = Array.isArray(target) ? [] :{};
    for(let key in target){
        if(target.hasOwnProperty(key)){
            newRes[key] = deepCopy(target[key]); 
        }
    }
    return newRes;

}

let a = [1,2,3,{name:1,age:2}];
let b = [{name:"b",age:21}]
let c = b.concat(a);
a[0] = "hscbjm";
a[3] = "hscbjm333";
b[0].name = "hbbbbbbb";

console.log(a)
console.log(b)
console.log(c)