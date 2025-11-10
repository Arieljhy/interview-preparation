// vue3
const reactive = (target) => {
    return new Proxy(target, {
        get(target, key, receiver) {
            // 依赖收集
            track(target, key)
            return Reflect.get(target, key, receiver);
        },
        set(target, key, value, receiver) {
            const oldValue = target[key];
            Reflect.set(target, key, value, receiver);
            // 触发更新
            if(isChange(oldValue, value)) trigger(target, key, value);
            return true;
        }
    })
}