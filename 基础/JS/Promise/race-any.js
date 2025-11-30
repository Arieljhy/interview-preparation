/**
 * Promise.race 和 Promise.any 的区别
 * race: 先完成（无论成功或失败），就立即返回
 * any: 第一个成功返回，则返回，全部失败才抛错
 */
Promise.myRace = function(promises) {
    return new Promise((resolve, reject) => {
        if (!promises.length) return resolve([]);
        promises.forEach(promise => {
            Promise.resolve(promise).then(value => resolve(value), 
            reason => reject(reason))
        })
    })
}

Promise.myAny = (promises) => {
    return new Promise((resolve, reject) => {
        if (!promises.length) return resolve([]);
        const errors = [];
        let errorCount = 0;
        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(value => resolve(value),
            reason => {
                errors[index] = reason;
                errorCount++;
                if (errorCount === promises.length) reject(errors);
            })  
        });
    });
}