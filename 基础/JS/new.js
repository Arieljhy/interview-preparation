/**
 * 实现new
 * 1、创建一个新的对象
 * 2、将新对象的__proto__ 指向 constructor的prototype
 * 3、改变this指向
 * 4、类型是object的，返回这个新对象，否则返回空对象。
 */
function myNew(constructor,...args){
    let newObj = Object.create();
    newObj.__proto__= constructor.prototype;
    let res = constructor.apply(newObj,args);
    return res instanceof Object ? res : newObj;
}