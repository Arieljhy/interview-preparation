/**
 * Vue2 响应式原理实现
 * 步骤：
 * 1、遍历对象每个属性，使用Object.defineProperty将其转换为getter/setter。
 * 2、为每个属性创建一个Dep实例，用于收集依赖（Watcher）和通知更新。
 * 3、在getter中收集依赖，在setter中触发更新。
 * 4、我们同时实现一个Watcher类，用于更新视图或执行回调。
 */

Dep.target = null;

class Dep {
    constructor() {
        this.subs = new Set();
    }
    // 收集依赖
    depend() {
        if (Dep.target) this.subs.set(Dep.target);
    }
    // 通知更新
    notify() {
        this.subs.forEach(watcher => watcher.update());
    }
}

class Watcher {
    constructor(vm, key, callback) {
        this.vm = vm;
        this.key = key;
        this.callback = callback;
        this.value = this.get();
    }

    get() {
        Dep.target = this;
        const value = this.vm[this.key];
        Dep.target = null;
        return value;
    }

    update() {
        const oldValue = this.value;
        const newValue = this.vm[this.key];
        if (oldValue !== newValue) {
            this.value = newValue;
            this.callback.call(this.vm, newValue, oldValue)
        }

    }
}

class Reactive {
    constructor(data) {
        this.data = data;
    }
    observe(data) {
        if (!data || typeof data !== 'object') return;

        Object.keys(data).forEach(key => {
            this.defineReactive(data, key, data[key]);
            this.proxyData(key);
        })
    }

    defineReactive(obj, key, value) {
        const dep = new Dep();
        // 递归处理嵌套对象
        this.observe(value);

        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() {
                if (dep.target) dep.depend();
                return val;
            },
            set(newVal) {
                if (newVal === val) return;
                val = newVal;
                this.observe(newVal)
                dep.notify();
            }
        })
    }

    proxyData(key) {
        Object.defineProperty(this, key, {
            get() {
                return this._data[key]
            },
            set(newVal) {
                this._data[key] = newVal;
            }
        })
    }

    watch(key, callback) {
        new Watcher(this, key, callback);
    }
}

// 数组方法重写 （简化版）

const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);
['push', 'pop', 'unshift', 'shift', 'splice', 'sort', 'reserve'].forEach(method => {
    const originMethod = arrayProto[method];
    arrayMethods[method] = function(...args) {
        const result = originMethod.call(this, ...args);
        const ob = this.__ob__;
        ob.dep.notify();
        return result;
    }
})