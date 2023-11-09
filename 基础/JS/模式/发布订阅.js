class EventBus{
    constructor(){
        this.cache = {};
    }
    on(name,fn){
        if(this.cache[name]){
            this.cache[name].push(fn);
        }else{
            this.cache[name] = [fn];
        }
    }
    emit(name,...args){
        if(this.cache[name]){
            this.cache[name].forEach(fn => {
                fn(...args)
            });
        }
    }
    off(name){
        if(this.cache[name]){
            let index =  this.cache[name].findIndex(f => f === fn) 
            index !== -1 && this.cache[name].splice(index,1);
        }
    }


}
function 