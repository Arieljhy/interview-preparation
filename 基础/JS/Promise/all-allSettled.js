/**
 * Promise.all 和 Promise.allSettled 的区别
 * 核心区别：
 *  all 主要有一个失败，整体失败
 *  allSettled 无论是否失败，都会等所有的请求完成
 */
Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        if (!promises.length) return resolve([]);
        const results = [];
        let count = 0;
        promises.forEach((promise, index) => {
           Promise.resolve(promise).then(val => {
                count++;
                results[index] = val;
                if (count === promises.length) return resolve(results);
            }, reason => reject(reason));
        })
    })
}

Promise.myAllSettled = function(promises) {
    return new Promise((resolve) => {
        if (!promises.length) return resolve([]);
        const results = [];
        let count = 0;
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => {
                results[index] = {
                    status: 'success',
                    value
                }
            }, reason => {
                results[index] = {
                    status: 'error',
                    reason
                }
            }).finally(() => {
                count++;
                if (count === promises.length) resolve(results);
            })
        });
    })
}