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
JSON.parse(JSON.stringify())
function deepCopy (obj){
    if( obj=== null ||  typeof obj !== 'object' && typeof obj !== 'function') return obj;
    let res = Array.isArray(obj)? [] : {};
    for(let key in obj){
        res[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
    return res;
}
function deepCopy1(obj){
    if(obj === null || typeof obj !== 'object' && typeof obj !== 'function') return obj;
    let res = Array.isArray(obj) ? [] :{};
    for(let key in obj){
        
        res[key] = typeof obj[key] === 'object' ? deepCopy(obj[key]) : obj[key];
    }
}
