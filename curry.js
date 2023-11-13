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
	return function fn (...nextArgs){
		if(this instanceof fn) return new context[fn](...nextArgs,...args)
		return context[fn].apply(context,nextArgs.concat(args))
	}
  }
Function.prototype.myCall = function(context,...args){
	context = context || window;
	let fn = Symbol('');
	context[fn] = this;
	let res = context[fn](...args);
	delete context[fn];
	return res;
}
Function.prototype.myApply = function(args){
	context = context || window;
	let fn = Symbol('');
	context[fn] = this;
	let res = context[fn](...args);
	delete context[fn];
	return res;

}

class MyPromise{
	constructor(exc){
		this.status = "pending";
		this.value = "";
		this.reason = "";
		this.onResolvedCallbacks = [];
		this.onRejectedCallbacks = [];
		resolve = (value) => {
			if(this.status === 'pending'){
				this.status = 'fulfilled';
				this.value = value;
			}
		}
		reject = (reason) => {
			if(this.status === 'pending'){
				this.status = 'rejected';
				this.reason = reason;
			}
		}
		try{
			exc(this.resolve,this.reject)
		}catch(err){
			this.reject(err)
		}
	}
	then(onFulfilled,onRejected){
		return new MyPromise((resolve,reject)=>{
			onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value=>value;
			onRejected = typeof onRejected === 'function' ? onRejected : reason=>{ throw  new Error( reason instanceof Error ? reason.message :reason)};
			if(this.status === 'pending'){
				this.onResolvedCallbacks.push(()=>{
					try{
						setTimeout(()=>{
							let res = onFulfilled(this.value);
							res instanceof MyPromise ? res.then(resolve,reject) : resolve(res)
						},0)
					}catch(err){
						reject(err);
					}
				
				})
				this.onRejectedCallbacks.push(()=>{
					try{
						setTimeout(()=>{
							let res = onRejected(this.value);
							res instanceof MyPromise ? res.then(resolve,reject) : resolve(res)
						},0)
					}catch(err){
						reject(err);
					}
				
				})
			}
			if(this.status === "fulfilled"){
				try{
					setTimeout(()=>{
						let res = onFulfilled(this.value);
						resolve(res)
					},0)
				}catch(err){
					reject(err);
				}
			}
			if(this.status === "rejected"){
				try{
					setTimeout(()=>{
						let res = onRejected(this.value);
						resolve(res)
					},0)
				}catch(err){
					reject(err);
				}
			}
		})
	}
	catch(err){
		return this.then(undefined,err)
	}
	resolve(value){
		return new MyPromise((resolve,reject)=>{
			resolve(value);
		})
	}
	reject(reason){
		return new MyPromise((resolve,reject)=>{
			reject(reason);
		})
	}
	all(promises){
		return new MyPromise((resolve,reject)=>{
			if(promises.length === 0) return resolve([]);
			let res = [];
			let count = 0;
			for(let i = 0 ;i < promises.length; i++)
			MyPromise.resolve(promises[i]).then((value)=>{
				res[i] = value;
				count++;
				if(count === promises.length){
					resolve(res)
				}
			},(err)=>{
				reject(err)
			})



		})
	}
	race(promises){
		return new MyPromise((resolve,reject)=>{
			if(promises.length === 0) return resolve([]);
			for(let i = 0 ;i < promises.length; i++)
			MyPromise.resolve(promises[i]).then((value)=>{
				resolve(value)
			},(err)=>{
				reject(err)
			})
		})
	}
	allSettle(promises){
		return new MyPromise((resolve,reject)=>{
			if(promises.length === 0) return resolve([]);
			let res = [];
			let count = 0;
			for(let i = 0 ;i < promises.length; i++)
			MyPromise.resolve(promises[i]).then((value)=>{
				res[i] = {status:'fulfilled',value};
				count++;
				if(count === promises.length){
					resolve(res)
				}
			},(err)=>{
				res[i] = {status:'rejected',reason:err};
				count++;
				if(count === promises.length){
					resolve(res)
				}
			})
		})
	}
	retry(promise){
		return new MyPromise((resolve,reject)=>{
		
			const fn = ()=>{
				MyPromise.resolve(promise).then((value)=>{
			
				},(err)=>{
					
				})
			}
	
		

		})
	}
	
}