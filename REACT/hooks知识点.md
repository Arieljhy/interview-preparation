#### React的钩子有哪些
`useRef`:
   - useRef 返回一个可变的ref对象，这个ref对象在整个组件的生命周期内是保持不变的
   - 修改 .current 值时候，不会触发重新渲染
   - 用于存储可变与渲染无关的值（**定时器id**、video player 实例等） 或者 访问和操作DOM元素

`useState`：
   - 基础数据的状态管理
   - set的时候，如果值有变化，会触发组件重新渲染

`useReducer`:
   - 复杂状态逻辑管理

`useEffect`：
   - 用来处理副作用方法，可以处理数据获取、设置和清除订阅、手动更改dom等操作；
   - 不传 -> 每次渲染后都执行；传[] -> 只有首次渲染执行；传[x1, x2, ...] 初次渲染 & 依赖项发生变化时 执行
   - 原理：每一次渲染，会使用 Object.is()对 依赖数组 中的每一项 比较 当前值 和 上一次渲染时的值
     - Object.is() 原始类型 比较的是 值本身； 引用类型 比较的是 引用地址
`useLayoutEffect`：
   - 浏览器绘制前需要同步完成的dom操作；
   - 读取dom布局信息，同步更新dom，例如 动态计算tooltip 位置
   - 避免视觉闪烁的场景
  
`useCallback`:
   缓存函数实例，可以避免 使用了函数的子组件的不必要的渲染；

`useMemo`:
   缓存计算结果，避免在每次渲染时都进行不必要的、开销大的重复计算

`useContext`:
方便跨层级共享状态，避免props逐层传递
性能问题：当context 的 value 变化时，所有消费该context的组件都会强制重新渲染；
   - 原因：useContext 订阅了完整的context对象，React通过比较value的**引用**来判断变更
   - 优化：
     - 拆分：使用时，拆分成职责更单一的、更小范围的context；
     -  传给Provider的value 的值和方法，分别使用 useMemo 和 useCallback 处理

`forwardRef`: 
默认状态下，函数组件上的 ref 会被忽略；forwardRef处理子函数组件，将ref透传，父组件就可以正常使用ref去获取

`useImperativeHandle`:
自定义 一些 需要暴露给父组件的实例

***react 18 新增hooks ***

`useId`:
 - 生成唯一id: 基于组件在 React树中的路径和顺序 生成的
 - SSR（服务端渲染 ）

`useTransition()`:
标记非紧急更新，可推迟或打断，作用于 ***状态更新过程*** 

```js
const [isPending, startTransition] = useTransition();
// - isPending: 提供 待处理 反馈
// - startTransition: 标记非紧急的UI，例如，数据获取后的列表渲染
```

`useDeferredValue`:
延迟值更新，不阻塞当前渲染，作用于 ***一个具体的值***

#### React Hooks 的核心原理
- 闭包保存状态和逻辑
- 链表管理 Hook 执行顺序
- 不可变更新确保状态可预测
- 副作用分离保持组件纯净
- 依赖跟踪优化性能


#### hooks有什么缺点吗
无限循环：useEffect 依赖项难以精确管理，易引发无限循环或遗漏更新。
过时闭包：缺少必要依赖项，导致副作用中只能获取到初始化的值
调用时序限制：不能在 条件、循环和嵌套函数中使用

#### 解决hooks中的闭包问题
   - useRef 的 .current 属性是可变的，且不会触发重新渲染；
   - 正确声明依赖数组
   - 使用函数式更新

#### 为什么react的hooks不能放在条件语句中
Hooks 在内部以链表形式存储，React 使用调用顺序来关联 Hook 和其状态，而条件语句会破坏调用顺序
   - 为什么类组件没有这个问题
      - 类组件将状态存储在 this.state 对象中，通过属性名访问
      - 而函数组件的 Hook 状态是通过调用顺序管理的

#### useEffect 和 useLayoutEffect 的区别
`执行时机不同`
useEffect：浏览器完成渲染和绘制之后异步执行，不阻塞渲染
useLayoutEffect: dom更新之后，浏览器完成渲染绘制之前同步执行，阻塞绘制

#### React.memo 
使 子组件的 props进行浅比较，props未变则跳过渲染
