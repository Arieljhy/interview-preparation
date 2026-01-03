/**
 * 异步重试机制
 * 可以重试 limit 次
 */
 // 
const request = (url, limit = 3)=>{
    let count = 0;
    return new Promise((resolve, reject) => {
        const retry = () => {
            fetch(url).then(result => resolve(result.json())).catch((error) => {
                // 不可恢复的错误 不需要重试
                // if (!isShouldRetry(error)) return reject(error);
                count++;
                if (count === limit) return reject(error);
                retry(); 
                
            });
        }
        retry();
    }) 
}

const retryRequest = (url, limit = 5) =>{
    return new Promise((resolve, reject) => {
        fetch(url).then(resolve).catch((error) => limit > 0 ?
        retryRequest(url, limit - 1) : reject(error))
    })
}
const retryReq = (url, limit = 3) => {
    return new Promise((resolve, reject) => {
        fetch(url).then(resolve)
        .catch((error) => limit > 0 ? retryReq(url, limit - 1) : reject(error));
    })
}



const isShouldRetry = (error) => {
    // 网络层面发生错误（DNS解析失败 或者 客户端断网）
    if (!error.response) return true;
    
    // 服务器相关的错误
    if (error.response.status >= 500) return true;

    // 网络限流
    if (error.response.status === 429) return true;

    return false;
}