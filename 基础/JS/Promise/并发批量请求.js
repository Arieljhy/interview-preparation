/**
 * 并发批量请求函数 multiRequest (随时补位)
 * 思想：
 * 控制同时进行的请求数量（并发数）
 * 当一个请求完成时，自动从队列中取出下一个请求
 */
const multiRequest = (tasks, maxNum = 6) => {
    return new Promise(resolve => {
        if (!tasks.length) {
             return resolve([]);
        }
        const results = [];
        let index = 0;
        let finishedCount = 0; // 已完成的请求数
        const run = () => {
            tasks[index].then(value => results[index] = {status: 'fulfilled', value})
                .catch(reason => results[index] = {status: 'rejected', reason})
                .finally(() => {
                    index++;
                    finishedCount++;
                    if (finishedCount < tasks.length) run(); 
                    else {
                        resolve(results); 
                    }                 
                })
        }

        for (let i = 0; i < Math.min(maxNum, tasks.length); i++) run();
    })
}

const multiRequest1 = (tasks, maxNum = 6) => {
    return new Promise(resolve => {
        if (!tasks.length) return resolve([]);
        const res = [];
        let i = 0, finishedCount = 0;
        const run = () => {
            tasks[i]
                .then(value => res[i] = {state: 'fulfilled', value})
                .catch(reason => res[i] = {state: 'rejected', reason})
                .finally(() => {
                    i++;
                    finishedCount++;
                    if (finishedCount < tasks.length) run();
                    else resolve(res);
                })
        }
        for (let i = 0; i < Math.min(tasks.length, maxNum); i++) run();
    })
}

const sleep = (delay) => new Promise(resolve => setTimeout(resolve, delay));
    console.time('multiRequest');
    const results = await sleep(5000);
    console.timeEnd('multiRequest');

// // 使用示例和测试代码
// const createTask = (id, delay, shouldReject = false) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (shouldReject) {
//                 reject(`Task ${id} failed`);
//             } else {
//                 resolve(`Task ${id} completed`);
//             }
//         }, delay);
//     });
// }
// // 测试用例
// (async () => {
//     // 创建测试任务
//     const tasks = [
//         createTask(1, 1000),
//         createTask(2, 500),
//         createTask(3, 800, true), // 这个会失败
//         createTask(4, 300),
//         createTask(5, 1200),
//         createTask(6, 600),
//         createTask(7, 400),
//         createTask(8, 900),
//     ];

//     // console.time('multiRequest');
//     const results = await multiRequest(tasks, 4);
//     // console.timeEnd('multiRequest');
    
//     console.log('Results:', results);
// })();

/**
 * 思考🤔
 * 问：为什么不用Promise.all？
 * 错误处理缺陷：一错全错
 * 问题：Promise.all 会在一组 Promise 中任意一个失败时立即拒绝，导致整组请求被丢弃。
 * 后果：即使其他 9 个请求成功，只要第 10 个失败，整组结果都无法获取。

javascript 体验AI代码助手 代码解读复制代码Promise.all([request1, request2, request3])
  .then((results) => console.log(results)) // 全部成功才触发
  .catch((error) => console.error(error)); // 任意一个失败直接进入这里
 */

/**
 * 思考🤔
 * 那用Promise.allSettled行不行，可不可取？
 * 它是可以失败的和成功的都等，但是，如果当中一个请求特慢，就会堵住后面的接口并发。
 */


