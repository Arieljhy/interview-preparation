/**
 * promise A+规范：
 * 防止死循环
 * 空回调 默认传递
 */
class MyPromise {
    static PENDING = "pending";
    static FULFILLED = "fulfilled";
    static REJECTED = "rejected";

    constructor (executor) {
        this.state = MyPromise.PENDING; // pending || fulfilled || rejected
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];

       const resolve = (value) => {
            // 只有pending状态才能改变
            if (this.state === MyPromise.PENDING) {
                this.state = MyPromise.FULFILLED;
                this.value = value;
                // 执行所有成功回调
                this.onFulfilledCallbacks.forEach(callback => callback(value));
            }
        }

       const rejected = (reason) => {
            // 只有pending状态才能改变
            if (this.state === MyPromise.PENDING) {
                this.state = MyPromise.REJECTED;
                this.reason = reason;
                // 执行所有失败回调
                this.onRejectedCallbacks.forEach(callback => callback(reason));
            }
        }

        try {
            executor(resolve, rejected);
        }
        catch (error) {
            rejected(error);
        }
    }

    then(onFulfilled, onRejected) {
        // 参数校验和 值穿透
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
        onRejected = typeof onRejected === 'function' ? onRejected : e => { throw e };

        const promise2 = new MyPromise((resolve, reject) => {
            const handleFulfilled = () => {
                queueMicrotask(() => {
                    try {
                        const x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                })
            }

            const handleRejected = () => {
                queueMicrotask(() => {
                    try {
                        const x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                })
            }

            if (this.state === MyPromise.FULFILLED) {
               handleFulfilled();
            }
            if (this.state === MyPromise.REJECTED) {
                handleRejected();
            }
            if (this.state === MyPromise.PENDING) {
                this.onFulfilledCallbacks.push(() => handleFulfilled())
                this.onRejectedCallbacks.push(() => handleRejected())
            }
        })
        return promise2;
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    // 抛出循环引用的异常
    if (x === promise2) return reject(new TypeError('Chaining cycle detected for promise'));

    if (x instanceof MyPromise) {
        x.then(y => resolvePromise(promise2, y, resolve, reject), reject);
    }
    else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        // 处理 thenable对象
        let called = false; // 防止重复调用

        try {
            const then = x.then;
            if (typeof then === 'function') {
                then.call(x,
                    y => { // 成功回调
                        if (called) return;
                        called = true;
                        resolvePromise(promise2, y, resolve, reject);
                    }, 
                    r => { // 失败回调
                        if (called) return;
                        called = true;
                        reject(r)
                    })
            }
            else {
                // x.then 不是函数， x是普通对象
                resolve(x);
            }
        } catch (error) {
            if (called) return;
                        called = true;
            reject(error);
        }


    }
    else {
        resolve(x);
    }
}