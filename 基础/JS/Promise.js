/**
 * promise 实现原理
 * 来解决 回调地狱 问题，.then 链式调用 , .catch 
 */
class myPromise{
    constructor(executor){
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
        try{
            executor(this.resolve , this.reject)
        }catch(error){
            reject(error)
        }
    }

    then = (onFulfilled,onRejected) => {
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value=>value;
      onRejected = typeof onRejected === 'function' ? onRejected : reason=>{ throw new Error(reason instanceof Error ? reason.message : reason)};
      return new myPromise((resolve,rejected)=>{
        if(this.status === 'pending'){
          
        }
      })

    }
}


class MyPromise {
    constructor(executor) {
      this.state = 'pending';
      this.value = undefined;
      this.callbacks = [];
  
      const resolve = (value) => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
          this.callbacks.forEach((callback) => callback.onFulfilled(value));
        }
      };
  
      const reject = (reason) => {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.value = reason;
          this.callbacks.forEach((callback) => callback.onRejected(reason));
        }
      };
  
      try {
        executor(resolve, reject);
      } catch (error) {
        reject(error);
      }
    }
  
    then(onFulfilled, onRejected) {
      return new MyPromise((resolve, reject) => {
        const handleCallback = (callback) => {
          try {
            const result = callback(this.value);
            if (result instanceof MyPromise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (error) {
            reject(error);
          }
        };
  
        if (this.state === 'fulfilled') {
          handleCallback(onFulfilled);
        } else if (this.state === 'rejected') {
          handleCallback(onRejected);
        } else {
          this.callbacks.push({
            onFulfilled: () => handleCallback(onFulfilled),
            onRejected: () => handleCallback(onRejected),
          });
        }
      });
    }
  
    catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  
    static resolve(value) {
      return new MyPromise((resolve) => resolve(value));
    }
  
    static reject(reason) {
      return new MyPromise((resolve, reject) => reject(reason));
    }
  
    static all(promises) {
      return new MyPromise((resolve, reject) => {
        let results = [];
        let count = 0;
  
        if (promises.length === 0) {
          resolve(results);
        } else {
          for (let i = 0; i < promises.length; i++) {
            promises[i]
              .then((result) => {
                results[i] = result;
                count++;
  
                if (count === promises.length) {
                  resolve(results);
                }
              })
              .catch((error) => {
                reject(error);
              });
          }
        }
      });
    }
  
    static race(promises) {
      return new MyPromise((resolve, reject) => {
        for (let i = 0; i < promises.length; i++) {
          promises[i]
            .then((result) => {
              resolve(result);
            })
            .catch((error) => {
              reject(error);
            });
        }
      });
    }
  }