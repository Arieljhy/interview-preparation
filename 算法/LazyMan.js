class LazyMan {
  constructor() {
    this.promise = Promise.resolve();
  } 
  
  log(id) {
    promise = promise.then(() => console.log(id));
    return this;
  }
  
  sleep(ms) {
    promise = promise.then(() => {
      return new Promise(resolve => setTimeout(resolve, ms));
    });
    return this;
  }
}

// 测试代码
LazyMan().log(1).sleep(1000).log(2);
// 输出：
// 1
// (等待1秒)
// 2