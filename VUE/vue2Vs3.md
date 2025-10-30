
<!-- Vue2 响应式原理实现
步骤：

遍历对象每个属性，使用Object.defineProperty将其转换为getter/setter。

为每个属性创建一个Dep实例，用于收集依赖（Watcher）和通知更新。

在getter中收集依赖，在setter中触发更新。

我们同时实现一个Watcher类，用于更新视图或执行回调。

Vue3 响应式原理实现
步骤：

使用Proxy代理目标对象，拦截各种操作。

使用一个全局的WeakMap来存储目标对象和其依赖映射（depsMap）的关系。

在get操作中跟踪依赖（track），在set操作中触发更新（trigger）。

同样，我们实现一个effect函数，相当于Vue2的Watcher，用于执行副作用（如更新视图）。

下面我们开始代码实现。 -->

### 1、vue3哪些方面変快了
- 响应式性能提升了
- 使用 tree-sharking 打包体积方面更小了
### 2、Vue3项目的打包体积为什么减少40%
### 3、Proxy 和 Object.defineProperty 的区别
### 4、为什么 Proxy 替換defineProperty