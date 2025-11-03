/**
 * bind、call、apply
 * 不同点：
 * 三者参数不相同，call，bind接收一个参数列表，而apply接收一个数组参数
 * call，apply会立即获得执行结果，而bind会返回一个已经指定this指向和参数的新函数
 * 相同点：
 * 三者都可以改变this的指向，而且都位于function的原型上，所有函数都可以通过原型链找到并调用。
 */
Function.prototype.myBind = function(context ,...args){
    context = context || window;
    let fn = symbol('');
    context[fn] = this;
    return function(...innerArgs){
        return context[fn].apply(context[fn], args.concat(innerArgs))
    };
}

Function.prototype.myCall = function(context, ...args){
    context = context || window;
    let fn = symbol('fn');
    context[fn] = this;
    
    const res = context[fn](...args);
    delete context[fn];
    return res;
}

Function.prototype.myApply = function(context, args){
    context = context || window;
    let fn = symbol('fn');
    context[fn] = this;

    const res = Array.isArray(args) ? context[fn](args): context[fn](...args);
    delete context[fn];
    return res;
}
