const getRes = (promise,limit)=>{
    let count = 0;
    return new Promise((resolve,reject)=>{
        const retry = ()=>{
            Promise.resolve(promise).then((res)=>{
                resolve(res)
            }).catch((err)=>{
                count++;
                if(count === limit){
                    reject(err);
                }else{
                    retry(); 
                }
            })
        }
        retry();
    }) 
}