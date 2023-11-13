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
    let count = 0 ;
    return function(url,options){
        let retryCount= options?.maxNum || 0;
        queue.push({url:url,retryCount:retryCount,retryCo:0});
        let len = queue.length;
        console.log("queue",queue,len)
        return new Promise((resolve,reject)=>{
            while(count < limit){
                next();
            }
             function next () {
                let ind = count;
                count++;
                while(ind >= queue.length){
                    console.log("resolve",res)
                    resolve(res)
                    return;
                }
                console.log(queue[ind])
                let {url,retryCount,retryCo} = queue[ind];
              
              
                 fetch(url).then((val)=>{
                     res[ind] = {status:'success',value:val};
                            
                }).catch((err)=>{
                    if( retryCo < retryCount ){
                        count--;
                        queue[ind].retryCo = queue[ind].retryCo+1;
                        next();
                    }else{
                        res[ind] = {status:'error',error:err};
                    }
              
                });
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


