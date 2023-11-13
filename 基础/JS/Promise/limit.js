function fetch(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let s = url.split('.')[0];
            if(Number(s[s.length-1])%2){
                resolve(url)
            }else{
                reject(url)
            }
            
        },2000)
    })
}

function limitReq(limit = 1){
    let queue = [];
    let res = [];
    let ind = -1;
    return function(url,options){
        ind++;
        let opt = {
            url,
            retryCount:options?.maxNum || -1,
            count:0
        }
        queue.push(opt);
        return new Promise((resolve,reject)=>{
            const dep = async (url) => {
                await fetch(url).then((val)=>{
                     res[ind] = {status:'success',value:val};
                    resolve(res);
                    if(queue.length < limit ){
                        console.log('add success1')
                        let url = queue.shift();
                        url && dep(url);
                    }else{
                            console.log('re')
                        return;
                    }
                            
                }).catch((err)=>{
                    if(count < retryCount){
                        console.log('retry',url,count)
                        count++;
                        dep(url);

                    }else{
                        count =0;
                        res[ind] = {status:'error',reason:err.message};
                        if(queue.length < limit ){
                            console.log('add err1',queue)
                            let url = queue.shift();
                            url && dep(url);
                        }else{
                            console.log('re err')
                            return;
                        }

                    }
              
                });
            }
             if(queue.length < limit ){
                console.log('add1-',queue,queue.length)
                let url = queue[0]
                url && dep(url);
             }
        })
    }
}
const req = limitReq(3);
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







// req("url1").then((value)=>{
//     console.log("1-",value)
// });
// req("url2").then((value)=>{
//     console.log("2-",value)
// });
// req("url3").then((value)=>{
//     console.log("3-",value)
// });
// req("url4").then((value)=>{
//     console.log("4-",value)
// });
// req("url5").then((value)=>{
//     console.log("5-",value)
// });
async function getData() {
    const promiselist = [];
    for (let i = 0; i < 100; i++) {
      const promise = fetch(`https://example.com/data${i}.json`);
      promiselist.push(promise);
    }
    const responses = await Promise.all(promiselist);
    for (const response of responses) {
      // handle each response here 
    }
  }
  