/**
 * bind 
 * 改变this指向 ，不立即执行
 */
Function.prototype.myBind = function(context ,...args){
    context = context || window;
    let fn = symbol('fn');
    context[fn] = this;
    return function(...innerArgs){
        return  context[fn].apply(context,args.concat(innerArgs))
    };
}
Function.prototype.myCall = function(context,...args){
    context = context || window;
    let fn = symbol('fn');
    context[fn] = this;
    const res =  context[fn](...args);
    delete context[fn];
    return res;
}

Function.prototype.myApply = function(context,args){
    context = context || window;
    let fn = symbol('fn');
    context[fn] = this;
    const res = Array.isArray(args)?context[fn](args):context[fn](...args);
    delete context[fn];
    return res;
}