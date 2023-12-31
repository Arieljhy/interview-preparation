/**
 * Currying 把接受多个参数的函数 变成 接受一个单一参数的函数
 *  主要作用 和 特点 是 参数复用、提前返回 和 延迟执行。
 */
function curry(fn , ...args){
    if(args.length >= fn.length){
      return fn(...args)
    }
    return function(...nextArgs){
        return curry(fn,...nextArgs,...args)
    }
}
function add(a, b, c) {
  return a + b + c
}
let curried = curry(add)
console.log(curried(2)(3,4))

//
// function add() {
//     const _args = [...arguments];
//     function fn() {
//       _args.push(...arguments);
//       return fn;
//     }
//     fn.toString = function() {
//       return _args.reduce((sum, cur) => sum + cur);
//     }
//     return fn;
// }

