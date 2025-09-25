function Watcher(vm, expOrFn, cb) {
    this.vm = vm;
    this.expOrFn = expOrFn;
    this.cb = cb;
    this.value = this.get();
  }
  
  Watcher.prototype = {
    get() {
      // 将当前Watcher实例设置为Dep.target
      Dep.target = this;
      const value = this.vm.$data[this.expOrFn];
      // 清除Dep.target
      Dep.target = null;
      return value;
    },
  
    update() {
      const oldValue = this.value;
      this.value = this.get();
      this.cb.call(this.vm, this.value, oldValue);
    },
  };
  
  function observe(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return;
    }
  
    Object.keys(obj).forEach((key) => {
      defineReactive(obj, key, obj[key]);
    });
  }
  
  function defineReactive(obj, key, val) {
    observe(val);
  
    const dep = new Dep();
  
    Object.defineProperty(obj, key, {
      get() {
        // 如果Dep.target存在，将其添加到依赖中
        Dep.target && dep.addDep(Dep.target);
        return val;
      },
      set(newVal) {
        if (newVal !== val) {
          val = newVal;
          // 数据更新时通知依赖进行更新
          dep.notify();
        }
      },
    });
  }
  
  function Dep() {
    this.deps = [];
  }
  
  Dep.prototype = {
    addDep(dep) {
      this.deps.push(dep);
    },
  
    notify() {
      this.deps.forEach((dep) => {
        dep.update();
      });
    },
  };
  
  function Vue(options) {
    this.$options = options;
    this.$data = options.data;
  
    observe(this.$data);
  
    // 创建Watcher实例，监听数据变化
    new Watcher(this, options.watch);
  }
  
  const vm = new Vue({
    data: {
      message: 'Hello, Vue!',
    },
    watch: {
      message(newVal, oldVal) {
        console.log(`message changed from ${oldVal} to ${newVal}`);
      },
    },
  });
  
  // 修改数据，触发watch回调
  vm.$data.message = 'Hello, World!';