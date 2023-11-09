/**
 * 事件总线 
 * EventBus
 * 发布订阅模式
 */
class EventBus{
    constructor(){
        this.cache = {}
    }
    on(name,fn){
        if(this.cache[name]){
            this.cache[name].push(fn)
        }else{
            this.cache[name] = [fn];
        }
    }
    off(name,fn){
        if(this.cache[name]){
          this.cache[name].findIndex(f => f === fn) !== -1 && this.cache[name].splice(index,1);
        }
    }
    emit(name,...args){
        if(this.cache[name]){
            this.cache[name].forEach(fn=>fn(...args))
        }
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
  
  