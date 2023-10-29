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
//   // 原函数
//   function add(x, y, z) {
//     return x + y + z;
//   }
  
// //   // 柯里化后的函数
// //   const curriedAdd = curry(add);
  
// //   // 柯里化函数的调用
// //   curriedAdd(1)(2)(3); // 返回 6
  
// //   // 也可以一次传入多个参数
// //   curriedAdd(1, 2)(3); // 返回 6
  

//   function curry1(fn,...args){
    
//         if(args.length >= fn.length){
//            return fn(...args)
//         }else{
//             return  function(...nextArgs){
//                 return curry1.call(fn,...args,...nextArgs);
//             }
//         }
    

//   }
//   ​ function add(x, y, z) {
//     return x + y + z;
//   }
//   // 另一种实现
// function curry(fn) {
//     return (...args) => {
//       if (args.length >= fn.length) {
//         return fn.apply(null, args);
//       } else {
//         return curry(fn.bind(null, ...args));
//       }
//     };
//   }

// function add(...args){
//     return args.reduce((acc,item)=>{
//          return acc+item
//      })
//  }
//   function curry2(fn){
//     let parmas = []
//     return function sum(...args){
//         if(args.length){//判断是否有参数
//             parmas = [...parmas,...args]
//             return sum
//         }
//         return fn(parmas)
//     }
// }

function currySum(fn,...args){
    let len = fn.length;
    if(args.length >= len){
        return fn(...args)
    }else{
        return function (...nextArgs){
            return currySum.call(this,fn,...args.concat(...nextArgs))
        }
    }
}
function curry(fn,...args){
    let len = fn.length;
    if(args.length >= len){
        return fn(...args);
    }
    return function(...nextArgs){
        return curry.call(this,fn,...args.concat(...nextArgs))

    }
} 
function sum(x,y,z){
    return x+y+z
}
let b= currySum(sum);
console.log(b(2)(3)(4))

    // 柯里化后的函数
    // const curriedAdd1 = curry(add);
    // let a = curriedAdd1(1)(2)
    // console.log(a)