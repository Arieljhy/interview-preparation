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
        try{
            executor(this.resolve , this.reject)
        }catch(error){
            this.reject(error)
        }
    }
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
    then = (onFulfilled,onRejected) => {

    }
}