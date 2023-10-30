function add(x,y,z){
 return x+y+z
}
function curry(fn,...args){
    return function(...nextArgs){
        if(args.length >= fn.length){
            return fn(...args);
        }
        return fn.apply(this,args.concat(nextArgs))
    }
}
let curried = curry(add)
let res =  curried(3)(4)(5)




function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn.apply(this, args);
      } else {
        return function (...nextArgs) {
          return curried.apply(this, args.concat(nextArgs));
        };
      }
    };
  }
  
  // 原函数
  function add(x, y, z) {
    return x + y + z;
  }
  
  // 柯里化后的函数
  const curriedAdd = curry(add);
  
  // 柯里化函数的调用
  curriedAdd(1)(2)(3); // 返回 6
  
  // 也可以一次传入多个参数
  curriedAdd(1, 2)(3); // 返回 6
  