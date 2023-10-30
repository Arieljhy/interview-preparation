/**
 * 批量请求函数 multiRequest
 */
const multiRequest  = (reqArr , limitNum)=>{
    let len = reqArr.length;
    let res = new Array(len).fill(false)
    let count = 0;
    return new Promise((resolve,reject)=>{
        while(count<limitNum){ next();}
        async function next(){
            let cur = count++;
            if(!res.includes(false)) return resolve(res);
            let  fn = reqArr[cur];
            res[cur] = fn();
        }
    })
}