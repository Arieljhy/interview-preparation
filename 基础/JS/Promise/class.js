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
class Req {
    constructor(maxConcurrent) {
        this.maxConcurrent = maxConcurrent;
        this.currentConcurrent = 0;
        this.queue = [];
    }
    request(url, options) {
        return new Promise((resolve, reject) => {
            let attempts = 0;
            const fetchRetry = () => {
                fetch(url).then(resolve).catch(err => {
                    attempts++;
                    if (attempts >= options.maxNum) {
                        reject(err);
                    } else {
                        fetchRetry();
                    }
                }).finally(() => {
                    this.currentConcurrent--;
                    if (this.queue.length) {
                        const next = this.queue.shift();
                        next();
                    }
                });
            };
            if (this.currentConcurrent < this.maxConcurrent) {
                this.currentConcurrent++;
                fetchRetry();
            } else {
                this.queue.push(fetchRetry);
            }
        });
    }
}
const req = new Req(3);
req.request('https://url1.com', { maxNum: 3 });
req.request('https://url2.com', { maxNum: 2 });
req.request('https://url3.com', { maxNum: 1 });
req.request('https://url4.com', { maxNum: 3 });