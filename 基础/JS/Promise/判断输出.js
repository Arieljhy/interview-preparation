/** 值穿透机制 */

// Promise A+规范支持值穿透，这是链式调用的重要特性：
Promise.resolve(42)
  .then() // 无参数
  .then(value => console.log(value)); // 输出: 42

Promise.resolve('data')
  .then(null, undefined) // 非函数参数
  .then(value => console.log(value)); // 输出: data
  
// 解释：then方法只接受函数作为参数，非函数值会被忽略
Promise.resolve(1)
    .then(2)
    .then(Promise.resolve(3))
    .then(console.log); // 输出: 1



// 错误处理机制：错误冒泡示例
new Promise((resolve, reject) => {
    reject(new Error('Initial error'));
})
.then(value => value * 2)
.catch(error => {
    console.log('Caught:', error.message);
    return 'recovered';
})
.then(value => console.log(value)); // 输出: recovered

