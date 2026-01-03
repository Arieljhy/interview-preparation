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
        if (this.cache.size >= this.maxCount) {
            const firstKey = this.cache.keys().next().value;
            firstKey && this.cache.delete(firstKey);
        }
        this.cache.has(name) && this.cache.delete(name);
        this.cache.set(name, value);
    }

    get(name) {
        if (!this.cache.has(name)) return;
        const value = this.cache.get(name);
        this.cache.delete(name);
        this.cache.set(name, value);
        return value;
    }
}


