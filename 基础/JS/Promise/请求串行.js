/**
 * 循环和 Promise 结合是怎样使用的呢？
 * for 、 while 、 for...of 等命令式循环结构，想要在循环中实现等待效果，必须使用 async 函数包裹循环中的 await ，不能使用 .then 。
 * forEach 、 map 、 filter 等函数式循环结构，不支持等待效果，因为这些函数式循环结构是同步的，不支持等待。
 * 
 * async 和 循环 + await 结合，实现循环之间等待效果。
 * promise.then 和 递归 结合，实现循环之间等待效果。
*/
function fetch (url) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({success: url})
        }, 2000)
    })
}

 async function getRes(urls) {
    for (let i = 0; i < urls.length; i++) {
        let res = await fetch(urls[i]);
        console.log("res",res);
    }
    console.log("end");
} 
let p1 = 'https://url1.com';

let p2 = 'https://url2.com';

let p3 = 'https://url3.com';

let p4 = 'https://url4.com';

let urls = [p1,p2,p3,p4];
getRes(urls);
