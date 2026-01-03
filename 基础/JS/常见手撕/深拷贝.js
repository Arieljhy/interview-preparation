/**
 *   浅拷贝
 *      数组的浅拷贝：
 *          扩展运算符 : 只能拷贝一层;
 *          slice()
 *          concat()
 *      对象常见的浅拷贝:
 *          扩展运算符
 *          Object.assign()
 * 注意：循环引用
 */
//深拷贝
//JSON.parse(JSON.stringify()) //深层次引用 和 

const getType = (target) => Object.prototype.toString.call(target).slice(8, -1)
const deepCopy = (target, map = new WeakMap()) => {
    if (map.has(target)) return target;

    const type = getType(target);
    let cloneTarget;
    switch (type) {
        case 'Object':
            cloneTarget = {};
            break;
        case 'Array':
            cloneTarget = [];
            break;
        case 'Map':
            cloneTarget = new Map();
            break;
        case 'Set':
            cloneTarget = new Set();
            break;
        case 'RegExp':
            return new RegExp(target);
        case 'Date':
            return new Date(target);
        default:
            return target;
    }
    map.set(target, cloneTarget);

    if (type === 'Map') {
        target.forEach((value, key) => {
            cloneTarget.set(deepCopy(key, map), deepCopy(value, map));
        })
    }
    else if (type === 'Set') {
        target.forEach((value) => {
            cloneTarget.add(deepCopy(value, map));
        })
    }
    else {
        for (const key in target) {
            if (Object.prototype.hasOwnProperty.call(target, key)) {
                cloneTarget[key] = deepCopy(target[key], map)
            }
        }
    }
     
    return cloneTarget;

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