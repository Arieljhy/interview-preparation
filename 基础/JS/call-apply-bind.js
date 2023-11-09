/**
 * bind 
 * 改变this指向 ，不立即执行
 */
Function.prototype.myBind = function(context ,...args){
    context = context || window;
    let fn = symbol('');
    context[fn] = this;
    return function(...innerArgs){
        return  context[fn].apply(context[fn],args.concat(innerArgs))
    };
}
Function.prototype.myCall = function(context,...args){
    context = context || window;
    let fn = symbol('fn');
    context[fn] = this;
    
    const res =  context[fn](...args);
    delete context[fn];
    return res;
}

Function.prototype.myApply = function(context,args){
    context = context || window;
    let fn = symbol('fn');
    context[fn] = this;

    const res = Array.isArray(args)?context[fn](args):context[fn](...args);
    delete context[fn];
    return res;
}


// code 1
new Promise((resolve, reject) => {
    reject('error')
  })
  
  .then(()=> {
    console.log('ok 1')
  }, (err) => {
    console.log('error 1: ' +  err)
  })
  
  .then(
    () => {
    console.log('ok 2')
  }, (err) => {
    console.log('error 2: ' + err)
  }
  )
  
  .catch(err => {
    console.log('catch 1: ' + err)
  })
