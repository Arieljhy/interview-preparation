/**
 * 写一个函数，把传来的fn执行，并且返回promise
 */
const executor = (fn, ...args) => {
    return new Promise((resolve, reject) => {
        try {
            const result = fn(...args);
            if (result instanceof Promise) {
                result.then(resolve).catch(reject);
            } else {
                resolve(result);
            }
        } catch (error) {
            reject(error);
        }
    })
}

const executorAsync = async (fn, ...args) => {
    try {
        const result = await fn(...args);
        return await result;
    } catch (error) {
        throw error;
    }   
}
/**
 * 关键点说明
 * 
 * 错误处理：使用 try-catch 捕获同步错误
 * Promise 处理：自动识别函数返回值是否为 Promise
 * 参数传递：支持向原函数传递参数
 * 一致性：无论原函数是同步还是异步，都返回 Promise
 * 推荐使用 增强版本 或 async/await 版本，因为它们提供了更好的错误处理和灵活性。
 */
