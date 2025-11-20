/**
 * 实现new
 * 1、创建一个新的对象
 * 2、将新对象的__proto__ 指向 constructor 的 prototype
 * 3、改变this指向
 * 4、类型是object的，返回这个新对象，否则返回空对象。
 */
function myNew(constructor, ...args){
    // const newObj = {};
    // newObj.__proto__ = constructor.prototype;

    // 创建空对象 并 链接原型链
    const newObj = Object.create(constructor.prototype)
    const result = constructor.apply(newObj, args);
    return result instanceof Object ? result : newObj;
}

let o = myNew(Boolean);
console.log(o)

Function.prototype.a = function() {
    console.log('f-aaaa');
}
Function.prototype.b = function() {
    console.log('f-b');
}
Object.prototype.a = function() {
    console.log('obj-aaaa');
}
Object.prototype.b = function() {
    console.log('obj-b');
}
a