/**
 * 柯里化 Curry
 * 把一个多参数的函数 ，转换成一系列单参数函数的过程(多参数函数 -》 单参数的链式调用)
 * 
 * 核心：参数复用 + 延迟执行
 * 场景：可以通过柯里化来创建一些‘预设了部分参数’的更加具体的函数
 */

// 收集参数，直到参数够了再执行
function curry(fn) {
  return function curried (...args) {
    // 原函数参数个数
    if(args.length >= fn.length){
      return fn(...args)
    }
    return function(...nextArgs) {
        return curried(...nextArgs, ...args)
    }
  }
}
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...nextArgs) {
      return curried.apply(this, args.concat(nextArgs))
    }
  }
}

function curry1(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, ...args);
    }
    return function(...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    }
  }
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function (...nextArgs) {
      return curried.apply(this, args.concat(nextArgs));
    }
  }
}

function add(a, b, c) {
  return a + b + c
}
let curried = curry(add)
console.log('add.length', add.length)
console.log(curried(2)(3)(4))

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