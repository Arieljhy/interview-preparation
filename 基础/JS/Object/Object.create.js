const getRes = function(promise,limit){
    let count = 1;
    return new watchEffect()((resolve,reject)=>{
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

 function getReq(limit){
    return function(maxNum){

    }
 }