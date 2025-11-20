#### 1、Vue2 和 Vue3响应式原理的区别

`vue2响应式原理`
步骤：
- 1、遍历对象每个属性，使用Object.defineProperty将其转换为getter/setter。
- 2、为每个属性创建一个Dep实例，用于收集依赖（Watcher）和通知更新。
- 3、在getter中收集依赖，在setter中触发更新。
- 4、我们同时实现一个Watcher类，用于更新视图或执行回调。
  
`vue3响应式原理`
步骤：
- 1、使用Proxy代理目标对象，拦截各种操作。
- 2、使用一个全局的WeakMap来存储目标对象和其依赖映射（depsMap）的关系。
- 3、在get操作中跟踪依赖（track），在set操作中触发更新（trigger）。
- 4、同样，我们实现一个effect函数，相当于Vue2的Watcher，用于执行副作用（如更新视图）。
#### 2、vue3哪些方面変快了 
- 响应式性能提升了
- 使用 tree-sharking 打包体积方面更小了
- 结合使用vite的话，在开发阶段构建速度提升了
#### 3、Vue3项目的打包体积为什么减少40%
- 主要得益于其在框架设计上对Tree-shaking的深度优化，以及核心库和响应式系统的重构。
#### 4、Proxy 和 Object.defineProperty 的区别
- Object.defineProperty
  - 只能劫持对象的属性，需要遍历每个属性，性能开销大
  - 无法监听 新增属性和删除属性
  - 对于数组需要拦截重写（push、pop、。。。）方法，实现响应式

- Proxy
  - 可以对整个对象、数组进行代理，无需遍历，性能更好
  - 可以监听属性新增和删除
  - 无需针对数组方法进行重写
#### 5、为什么 Proxy 替換defineProperty
- 支持的对象和数组的整体代理
- 更好的性能

#### 6、为什么要新增Composition API，它能解決什么问题,与 vue2 的Option API 有什么不同
组合式api 相较于 选项式api，更加

#### 7、都说Composition API 与 React Hook很像，说说区别
- 组合式api 侧重于响应式依赖追踪。一个组件只有在它实际使用的响应式数据发生变化时才会被通知更新。父组件状态的改变，如果与某个子组件无关，该子组件完全不会受到影响。

- react hooks 依赖调用顺序

#### 8、Vue2和Vue3同样可以使用TS开发，为什么 Vue3就易于扩展呢？

#### 9、vue3 相比较于 vue2 在编译阶段有哪些改进
- diff算法优化: vue3在diff算法中相比vue2增加了动态标记 patch_falg， 只追踪动态节点的变化
- 静态提升: Vue3中对不参与更新的dom元素，会做静态提升，提升到render方法之外，只会被创建一次，在渲染时直接复用
- 事件监听缓存: 缓存事件函数，避免引起不必要的绑定了事件的组件的重渲染

