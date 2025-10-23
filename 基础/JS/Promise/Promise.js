/**
 * promise 实现原理
 * 来解决 回调地狱 问题，.then 链式调用 , .catch 
 */
class myPromise{
    constructor(executor) {
        this.status = 'pending';
        this.value = '';
        this.reason = '';
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
        try {
            executor(this.resolve , this.reject);
        } 
        catch (error) {
            reject(error);
        }
    }

    then(onFulfilled, onRejected) {

      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value=>value;
      onRejected = typeof onRejected === 'function' ? onRejected : reason=>{ throw new Error(reason instanceof Error ? reason.message : reason)};

      return new myPromise((resolve, reject) => {
        if (this.status === 'pending') {
          this.onResolvedCallbacks.push(() => {

            setTimeout(() => {
              try {
                const result = onFulfilled(this.value);
                result instanceof MyPromise ? result.then(resolve,reject) : resolve(result);
              } catch (e) {
                reject(e);
              }
            }, 0);
          })

          this.onRejectedCallbacks.push(() => {
            setTimeout(() => {
              try {
                const result = onRejected(this.reason);
                result instanceof MyPromise ? result.then(resolve,reject) : resolve(result);
              } catch (e) {
                reject(e);
              }
            }, 0);
          })
        }

        if (this.status === 'fulfilled') {
          setTimeout(() => {
            try{
              const result = onFulfilled(this.value);
              result instanceof MyPromise ? result.then(resolve,reject) : reject(result);
            } catch (e) {
              reject(e);
            }
          },0)
        } 
        if (this.status === 'rejected') {
          setTimeout(() => {
            try {
              const result = onRejected(this.reason);
              result instanceof MyPromise ? result.then(resolve,reject) : resolve(result);
            } catch (e) {
              reject(e);
            }
          },0)
        }
      })
    }
    catch(onRejected){
      return this.then(undefined,onRejected);
    }
    //finally方法
    finally(callback) {
      return this.then(
        value => MyPromise.resolve(callback()).then(() => value),             //执行回调,并return value传递给后面的then
        reason => MyPromise.resolve(callback()).then(() => { throw reason })  //reject同理
      )
    }
  
    static resolve(value){
      return myPromise((resolve,reject)=>{
        resolve(value)
      })
    }
    static reject(reason){
      return myPromise((resolve,reject)=>{
        reject(reason)
      })
    }
    static all(promiseArr){
      return new myPromise((resolve,reject)=>{
          let res = [];
          let count = 0;
          if(promiseArr.length === 0) return resolve([])
          for(let i = 0 ; i < promiseArr.length ; i++){
            myPromise.resolve(promiseArr[i]).then((val)=>{
              count++;
              res[i] = val;
              if(count === promiseArr.length) return resolve(res);
            },(err)=>{
              reject(err);
            })
          }
      })

    }
    static allSettled(promiseArr){
      return new myPromise((resolve,reject)=>{
        let res = new Array(promiseArr.length);
        let count = 0;
        for(let i = 0 ; i < promiseArr.length ; i++){
       
          myPromise.resolve(promiseArr[i]).then((val)=>{
            count++;
            res[i] = {status:'fulfilled',value:val}
            if(count === promiseArr.length){
              resolve(res)
            }
          },(reason)=>{
            count++;
            res[i] = {status:'rejected',reason}
            if(count === promiseArr.length){
              resolve(res)
            }
          })
        }
      })
    }
    static race(promiseArr){
      return myPromise((resolve,reject)=>{
        if(promiseArr.length === 0) return resolve()
        for(let i = 0 ; i < promiseArr.length ; i++){
         myPromise.resolve(promiseArr[i]).then((val)=>{
            resolve(val)
          },rej=>{
            reject(rej)
            return;
          })
        }
      })
    }
}

