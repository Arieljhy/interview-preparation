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

 Object.myCreate = function (proto,proObj) {
    if (proObj === null) {
      // 这里没有判断proObj是否是原始包装对象
      throw 'TypeError'
    } else {
      function F() {}
      F.prototype = proto
      const obj = new F()
      if (proObj !== undefined) {
        Object.defineProperties(obj, proObj)
      }
      if (proto === null) {
        // 创建一个没有原型对象的对象，Object.create(null)
        obj.__proto__ = null
      }
      return obj
    }
  }

  Object.myCreate = function (proto,proObj){
    
  }