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
            this.cache.push(fn)
        }else{
            this.cache = [fn];
        }
    }
    off(name,fn){
        if(this.cache[name]){
          this.cache[name].findIndex(f => f === fn) !== -1 && this.cache[name].splice(index,1);
        }
    }
    emit(name,...args){
        if(this.cache[name]){
            this.cache[name].forEach(f=>fn(...args))
        }
    }
} 