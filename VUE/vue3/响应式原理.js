
/**
 * Vue3 响应式原理实现
 * 步骤：
 * 1、使用Proxy代理目标对象，拦截各种操作。
 * 2、使用一个全局的WeakMap来存储目标对象和其依赖映射（depsMap）的关系。
 * 3、在get操作中跟踪依赖（track），在set操作中触发更新（trigger）。
 * 4、同样，我们实现一个effect函数，相当于Vue2的Watcher，用于执行副作用（如更新视图）。
 */
let activeEffect = null;
const targetMap = new WeakMap();

// 依赖收集
function track(target, key) {
    if (!activeEffect) return;
    let depsMap = targetMap.get(target);
    if (!depsMap) targetMap.set(target, (depsMap = new Map()));
    
    let dep = depsMap.get(key);
    if(!dep) depsMap.set(key, (dep = new Set()));
    dep.add(activeEffect);
    // 记录effect 的依赖，用于清理
    activeEffect.deps.push(dep);
}

function trigger(target, key, type = 'SET') {
    const depsMap = targetMap.get(target);
    if (!depsMap) return;

    const effects = new Set();
    const addEffects = (dep) => {
        dep && dep.forEach(effect => effects.add(effect));
    }

    addEffects(depsMap.get(key));

    if (type === 'ADD' || type === "DELETE") {
        addEffects(depsMap.get(Array.isArray(target) ? 'length': 'ITERATE_KEY'));
    }

    effects.forEach(effect => {
        if (effect !== activeEffect) {
            effect.scheduler ? effect.scheduler() : effect();
        }
    })
}

function effect(fn, options = {}) {
    const effectFn = () => {
        cleanup(effectFn);
        activeEffect = effectFn;
        effectStack.push(effectFn);
        const result = fn();
        effectStack.pop();
        activeEffect = effectStack[effectStack.length - 1];
        return result;
    }
    effectFn.deps = [];
    effectFn.options = options;

    if(!options.lazy) effectFn();
    effectFn.scheduler = options.scheduler;
    return effectFn;
}

function cleanup(effectFn) {
    for (const dep of effectFn.deps) {
        dep.delete(effectFn);
    }
    effectFn.deps.length = 0;
}

const isObject = (target) => !target || typeof target !== 'object';
const hadKey = (target, key) => Object.prototype.hasOwnProperty.call(target, key);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);

function createReactiveObject(target) {
    if (!isObject(target)) return target;
    // 避免重复代理
    if (target['__v_isReactive']) return target;
    
    return new Proxy(target, {
        get(target, key, receiver) {
            // 访问 __v_isReactive 属性时返回 true
            if (key === '__v_isReactive') return true
            
            const res = Reflect.get(target, key, receiver);
            // 依赖收集
            track(target, key);
            if (isObject(res)) return createReactiveObject(res);
            return res;
        },
        set(target, key, value, receiver) {
            const oldValue = target[key];
            const res = Reflect.set(target, key, value, receiver);
            if (hasChanged(value, oldValue)) trigger(target, key, type);
            return res;
        },
        deleteProperty(target, key) {
            const res = Reflect.defineProperty(target, key);
            if (hadKey(target, key)&& res) trigger(target, key, 'DELETE')
        },
        has(target, key) {
            const res = Reflect.has(target, key);
            track(target, key);
            return res;
        },
        ownKeys(target) {
            track(target, Array.isArray(target) ? "length" : 'ITERATE_KEY');
            return Reflect.ownKeys(target)
        }
    })
}
