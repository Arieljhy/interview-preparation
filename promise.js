// Promise.all = function(promises){
//     return new Promise((resolve,reject)=>{
//         let res = [],count = 0;
//         promises.forEach((promise,index) => {
//             Promise.resolve(promise).then((result)=>{
//                 res[i] = result;
//                 count++;
//                 if(count === promise.length){
//                     resolve(res)
//                 }
//             },(reason)=>{
//                 reject(reason);
//             })
            
//         });
//     })
    
// }

class myPromise{
    constructor(executor){
        this.status = 'pending';
        this.value = '';
        this.reason = '';
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];

        resolve = (value)=>{
            if(this.status === 'pending'){
                this.status = 'fulfilled';
                this.value = value;
            }
        }
        reject = () => {
            if(this.status === 'pending'){
                this.status = 'rejected';
                this.reason = reason;
            }
        }
        try{
            executor(this.resolve,this.reject)
        }catch(err){
            this.reject(err)
        }

    }
    then(onFulfilled,onRejected){
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? 
            onRejected : reason => { throw new Error( typeof reason === Error?reason.message:message)}
        return new myPromise((resolve,reject)=>{
            if(this.status === 'pending'){
                this.onResolvedCallbacks.push(()=>{
                    setTimeout(()=>{
                        try{
                            let res = onFulfilled(this.value);
                            res instanceof myPromise ? res.then(resolve,reject) :resolve(res); 
                        }catch(err){
                            reject(err)
                        }
                    },0)
                })
                this.onRejectedCallbacks.push(()=>{
                    setTimeout(()=>{
                        try{
                            let res = onRejected(this.reason);
                            res instanceof myPromise ? res.then(resolve,reject) :resolve(res); 
                        }catch(err){
                            reject(err)
                        }
                    },0)
                })
            }
            if(this.status === 'fulfilled'){
                setTimeout(()=>{
                        try{
                            let res = onFulfilled(this.value);
                            resolve(res); 
                        }catch(err){
                            reject(err)
                        }
                },0)
            }
            if(this.status === 'rejected'){
                setTimeout(()=>{
                    try{
                        let res = onRejected(this.reason);
                        resolve(res); 
                    }catch(err){
                        reject(err)
                    }
                },0)  
            }

        })
     

    }
    catch(onRejected){
        return this.then(undefined,onRejected)
    }
    static resolve(value){
       return value instanceof myPromise ? value : new myPromise((resolve ,reject)=> resolve(value))
    }
    static reject(reason){
        return reason instanceof myPromise ? reason : new myPromise((resolve ,reject)=>reject(reason))
    }
    static all(promises){
        return new myPromise((resolve,reject)=>{
            if(!promises.length) return resolve()
            let result = [];
            let count = 0;
            promises.forEach((promise,index)=>{
                myPromise.resolve(promise).then((res)=>{
                    result[index] = res
                    count++;
                    if(count === promises.length) return resolve(result)  
                },(err)=>{
                    reject(err)
                })
               
            })
        })
    }
    static race(promises){
        return new myPromise((resolve,reject)=>{
            if(!promises.length) return resolve()
            promises.forEach((promise)=>{
                myPromise(promise).then((res)=>{
                    resolve(res)
                },(err)=>{
                    reject(err)
                })
            })
        })
    }
}

promise()
 const versionCompare = (v1,v2)=>{
    if(!v1 || !v2) return;
    const v1Arr = v1.split('.');
    const v2Arr = v2.split('.');
    const maxLen = Math.max(v1Arr.length,v2Arr.length);
    for(let i = 0; i<len ; i++){
        const v1Val = v1Arr[i] || 0;
        const v2Val = v2Arr[i] || 0;
        if(v1Val === v2Val) continue;
        if(v1Val > v2Val){
            return 1
        }else if(v1Val < v2Val){
            return -1
        }
    }
    return 0;
 }



