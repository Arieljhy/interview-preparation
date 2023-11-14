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

function Req(limit) {
    let current = 0;
    let queue = [];
    return function(url, options) {
        return new Promise((resolve, reject) => {
            let count = 0;
            const fetchRetry = () => {
                fetch(url).then((res)=>{
                    console.log("resolve",res)
                    resolve(res)
                }).catch(err => {
                    count++;
                    if (count >= options.maxNum) {
                        console.log("end",err)
                        resolve(err);
                    } else {
                        console.log("retry",url,count)
                        fetchRetry();
                    }
                }).finally(() => {
                    current--;
                    if (queue.length) {
                        const next = queue.shift();
                        next();
                    }
                });
            };
            if (current < limit) {
                current++;
                fetchRetry();
            } else {
                queue.push(fetchRetry);
            }
        });
    }
}
const req = new Req(3);
req('https://url1.com', { maxNum: 3 });
req('https://url2.com', { maxNum: 2 });
req('https://url3.com', { maxNum: 1 });
req('https://url4.com', { maxNum: 3 });