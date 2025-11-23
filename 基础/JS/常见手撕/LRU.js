/**
 * LRU 算法
 * 最近最少使用原则
 */
class LRU {
    constructor(count) {
        this.cache = new Map();
        this.maxCount = count;
    }

    put(name, value) {
        if (this.cache.size >= this.count) {
            const firstKey = this.cache.keys().next().value;
            firstKey && this.cache.delete(firstKey);
        }
        this.cache.has(name) && this.cache.delete(name);
        this.cache.set(name, value);
    }

    get(name) {
        if (!this.cache.has(name)) return;
        let value = this.cache.get(name);
        this.cache.delete(name);
        this.cache.set(name, value);
        return value;
    }

    // get(key: string) {
    //     if (!this.cache.has(key)) return;
    //         const value = this.cache.get(key);
    //         this.cache.delete(key);
    //         this.cache.set(key, value);
    //         return value;
    // }

    // put(key: string, value: any) {
    //     if (this.cache.size >= this.maxCount) {
    //         const headKey = this.cache.keys().next().value;
    //         headKey && this.cache.delete(headKey)
    //     }
    //     this.cache.has(key) && this.cache.delete(key);
    //     this.cache.set(key, value);
    // }
}


