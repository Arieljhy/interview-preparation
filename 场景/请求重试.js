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

const retry1 = async (url, maxCount = 5) => {
    return await fetch(url).catch(() => maxCount > 0 ? retry1(url, maxCount--) : Promise.reject())
}