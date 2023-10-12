/**
 * LRU 算法
 * 最近最少使用原则
 */

class LRU {
    constructor(count){
        this.cache = new Map();
        this.maxCount = count;
    }
    put(key,value){
        this.cache.size === this.maxCount && this.cache.delete(this.cache.keys().next().value);
        this.cache.set(key,value);
    }
    get(key){
        if(this.cache.has(key)){
            let val = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key,val);
            return val;
        }else{
            return -1
        }   
    }
}
