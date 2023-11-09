function add(x,y,z){
 return x+y+z
}
// function curry(fn,...args){
//     return function(...nextArgs){
//         if(args.length >= fn.length){
//             return fn(...args);
//         }
//         return fn.apply(this,args.concat(nextArgs))
//     }
// }
// let curried = curry(add)
// let res =  curried(3)(4)(5)()

// function curry(fn) {
//     return function curried(...args) {
//       if (args.length >= fn.length) {
//         return fn.apply(this, args);
//       } else {
//         return function (...nextArgs) {
//           return curried.apply(this, args.concat(nextArgs));
//         };
//       }
//     };
//   }

  function curry(fn,...args){
		// 如果参数的长度大于等于被包装的函数的入参数
		// 则直接执行被包装的函数，并将入参数依次传入
		// 此处为递归的出口，如果不满足此条件，将递归执行 curry 方法
		if(args.length >= fn.length) {
			return fn(...args)
		} else {
			// 否则返回一个函数，将已传入的参数 args 提前传入 curry 中
			// 将新传入的参数 _args 也传入到 curry 中
			// 对 curry 柯里化函数递归调用
			return function(..._args) {
				return curry(fn,...args,..._args)
			}
		}
	}

  
//   // 原函数
//   function add(x, y, z) {
//     return x + y + z;
//   }
  
  // 柯里化后的函数
  const curriedAdd = curry(add);
  
  // 柯里化函数的调用
  console.log(curriedAdd(1)(2)(3)); // 返回 6
  
  // // 也可以一次传入多个参数
  // curriedAdd(1, 2)(3); // 返回 6
  //
  Function.prototype.myBind = function(context,...args){
	context = context || window;
	let fn = Symbol('');
	context[fn] = this;
	return function(...nextArgs){
		if(context.)
		return context[fn].apply(context,nextArgs.concat(args))
	}
  }
  if(this instanceof fn){
	return new _this(...args, ...innerArgs);
}