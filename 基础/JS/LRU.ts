/**
 * LRU 算法
 * 最近最少使用原则
 */

class LRU {
    private cache: Map<string, any>;
    private maxCount: number;

    constructor (count: number) {
        this.cache = new Map();
        this.maxCount = count;
    }

    get(key: string) {
        if (this.cache.has(key)) {
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
        }
        return -1;
    }

    put(key: string, value: any) {
        if (this.cache.size >= this.maxCount) {
            const headKey = this.cache.keys().next().value;
            headKey && this.cache.delete(headKey)
        }
        this.cache.has(key) && this.cache.delete(key);
        this.cache.set(key, value);
    }
}


