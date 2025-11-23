const myInstanceof = (instance , constructor) => {
    // 参数校验
    if (instance === null || 
        (typeof instance !== 'object' && typeof instance !== 'function') ) return false;
    if (typeof constructor !== 'function') throw new TypeError('');
    

    let proto = Object.getPrototypeOf(instance);
    const prototype = constructor.prototype;
    // 循环遍历 实例的原型链
    while (proto) {
        if (proto === prototype) return true;
        proto = Object.getPrototypeOf(proto);
    }

    return false;
}
let f = function () {}
console.log(myInstanceof(f, Object))