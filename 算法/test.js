class LRU{
    constructor(count){
        this.cache = new Map();
        this.maxCount = count;
    }
    put(name,value){
        this.cache.size ===  this.maxCount ? 
        if(this.cache.size < this.maxCount){
            if(this.cache.has(name)){
                let res = this.cache.get(name);
                this.cache.delete(name);
                this.cache.set(name,res)
            }else{
                this.cache.set(name,value)
            }
        }else{
            this.cache.delete(this.cache.keys().next().value);
            this.cache.set(name,value);
        }
     
    }
    get(name){
        let value = this.cache.get(name);
        this.cache.delete(name);
        this.cache.set(name,value);
        return value;
    }
}
/**
 * 输入长度为 n 的一个正整数序列，要求输出序列中最长连号的长度。
连号指在序列中，从小到大的连续自然数。

输入格式
第一行，一个整数 n。
第二行，任意个整数 a_i，之间用空格隔开。

输出格式
一个数，第二行前n个整数中最长连号的个数。

样例输入
10
1 5 6 2 3 4 5 6 8 9 5 6

样例输出
5

示例：
```js
const str = `10
1 5 6 2 3 4 5 6 8 9 5 6`

console.log(solution(str)) // 输出5
```
 */
const solution = (str)=>{
    let n = str.split('\n')[0];
    let arr = str.split('\n')[1].split(' ').splice(0,n);
    console.log(n,arr)
    let dp = new Array(arr.length);
    dp[0] = 1;
    let max = -Infinity;
    for(let i = 1; i <= arr.length ; i++){
        if(Number(arr[i-1]) + 1 === Number(arr[i])){
            dp[i] = dp[i-1] + 1;
        }else{
            dp[i] = 1;
        }
        max = Math.max(max,dp[i]);
    }
    return max;
}
const str = `10
1 5 6 2 3 4 5 6 8 9 5 6`;
console.log(solution(str))

/**
 * 请封装一个Req模块，要求：
（1）可以配置同一时刻的最大请求并发数量，例如设置最大并发数量为3，如果正在进行的请求有3个，则后续请求依次排队插入；
（2）可以配置单个请求最多请求次数，例如当配置最大请求次数为3时，如果3次都请求都失败，才抛出错误，否则自动重试；

使用示例：
```js
// 假设只会发起GET请求
// 可以使用fetch方法
const req = new Req(3); // 设置最大并发数

req('https://url1.com', {
    maxNum: 3, // 最多请求3次
});

req('https://url2.com', {
    maxNum: 2,
});

req('https://url3.com', {
    maxNum: 1,
});

req('https://url4.com', { // 等待前面3个请求有1个完成之后进行替补
    maxNum: 3,
});

 */
const req = Req(3)
function Req(limit){
    let req = [];
    let count = 0;
    return function(url,option){
        let maxNum = option?.maxNum || -1;
        if(maxNum === -1) return;
        count++;
        let num = 0;
        if( count < limit){
            const retry = ()=>{
                new Promise((resolve,reject)=>{
                    num++;
                    fetch.get(url).then((value)=>{
                        resolve(value)
                    }).catch((err)=>{
                        if(num < maxNum){
                            retry()
                        }else{
                            reject(err);
                        }
    
                    })
                })

            }
            retry();
        }else{
            req.push(url);
        }    
    }
}