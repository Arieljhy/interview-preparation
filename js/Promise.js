/**
 * promise 实现原理
 * 
 */
class myPromise{
    constructor(fn){
        this.status = 'PENDING';
        this.value = '';
        this.reason = '';
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];
    }
    resolve = (value) => {

    }
}