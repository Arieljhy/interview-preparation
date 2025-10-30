function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) return reject(new TypeError('Promise 中存在循环引用'));

    if (x instanceof MyPromise) {
        x.then(y => resolve(y)).catch(e => reject(e));
    }
    // 处理thenable对象
    else if (x && (typeof x === 'object' || typeof x === 'function')) {
        let called = false;
        try {
            const then = x.then;
            if (typeof then === 'function') {
                then.call(x, y => {
                        if (called) return;
                        called = true;
                        resolve(y);
                    },
                    r => {
                        if (called) return;
                        called = true;
                        reject(r);
                    }
                )
            }
            else {
                resolve(x)
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