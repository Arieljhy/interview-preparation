const getRes = function(promise,limit){
    let count = 1;
    return new Promise((resolve,reject)=>{
        const retry = ()=>{
            Promise.resolve(promise).then((res)=>{
                resolve(res)
            },
            (err)=>{
                if(count > limit){
                    reject(err)
                }else{
                    retry() 
                }
            })
        }
        retry();
       
    })
}