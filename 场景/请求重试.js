/**
 * 请求重试方法（场景：弱网环境下，请求容易超时或失败）
 * @param {string} url 请求地址
 * @param {number} maxCount 请求最大数
 */
const retry = async (url, maxCount = 5) => {
    return await fetch(url).catch(
        () => maxCount > 0 ? retry(url, maxCount - 1) 
        : Promise.reject());
}

const run = async (asyncRequestFn, retryCount = 3) => {
    const retry = async (curRetryCount) => {
        try {
            const res = await asyncRequestFn();
            return res;
        } catch (err) {
            if (curRetryCount > 0) {
                return retry(curRetryCount - 1);
            }
            else {
                throw err;
            }
        }
    }
    return retry(retryCount);
}
const asyncFn = () => new Promise(resolve => setTimeout(() => resolve(11111), 20000));
run(asyncFn).then(res =>{
    console.log('data', res);
}).catch(err => {
    console.log('err', err);
})

