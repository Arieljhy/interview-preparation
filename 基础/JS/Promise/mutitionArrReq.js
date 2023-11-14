const  multiRequest = (urls = [], maxNum)=>{
    const len = urls.length;
    const res = new Array(len).fill(false);
    let count= 0;
    return new Promise((resolve,reject)=>{
        const next = ()=>{
            let cur = count;
            count++;
            if(cur >= len){
                     // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
                !result.includes(false) && resolve(res);
                return;
            }
            const url = urls[cur];
            fetch(url).then((val)=>{
                res[cur] = {status:'success',value:val};
                if (cur < len) {
                    next();
                  }
            }).catch((err)=>{
                res[cur] = {status:'error',error:err};
                if (cur < len) {
                    next();
                  }

            })
        }
        while(count < maxNum){
            next();
        }
    })

}