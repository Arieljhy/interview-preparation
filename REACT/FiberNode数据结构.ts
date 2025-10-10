type Fiber = {
  // 标记 fiber 的类型，即描述的组件类型，如原生标签、函数组件、类组件、Fragment 等。
  // WorkTag 中带 Host 前缀的是跟 dom 相关的，比如：HostComponent 是指 html 原生标签，HostPortal 是指 portal 挂载的 dom。
  tag: WorkTag;
  // 标记组件在当前层级下的的唯一性
  // 协调阶段使用 key 区分组件
  // 复用组件满足三大要素：同一层级下、相同类型、相同的 key 值
  key: null | string;
  // 组件类型，等同于 type
  elementType: any;
  // 标记组件类型，如果是原生组件，这里是字符串，如果是函数组件，这里是函数，如果是类组件，这里是类
  type: any;
  // 如果组件是原生标签，这里是 DOM；如果是类组件，这里是实例；如果是函数组件，这里是 null
  stateNode: any;

  // 用来链接其他 fiber 节点形成 fiber 树
  // 父 fiber
  return: Fiber | null;
  // 单链表结构，第一个子 fiber
  child: Fiber | null;
  // 下一个兄弟 fiber
  sibling: Fiber | null;
  // 记录了节点在当前层级中的位置下标，用于 diff 时候判断节点是否需要发生移动
  // Vue 中没有 index，因为 Vue 中是数组，天然携带下标
  index: number;

  // 新的 props
  pendingProps: any;
  // 上一次渲染时使用的 props，也就是当前界面上展示的 props，和 pendingProps 比较，判断是否需要重新渲染当前组件
  memoizedProps: any;
  
  // 队列，存储 updates 与 callbacks，比如 createRoot(root).render 或者 setState 的更新
  // updateQueue: mixed;
  
  // 不同组件的 memoizedState 存储不同
  // 函数组件 hook0（hook 也是单链表结构，useEffect 与 useLayoutEffect 还是单向循环链表，hook0 指第一个 hook，对象类型）
  // 类组件 state
  memoizedState: any;
  
  // 记录节点是新增、修改还是删除
  flags: Flags;
  
  // 记录要删除的子节点，存储到父节点上
  deletions: Array<Fiber> | null;
  
  // 记录一系列的 update
  updateQueue: any;

  // 指向该 fiber 在另一次更新时对应的 fiber
  // 缓存 fiber，如果可复用，方便 clone，避免重复创建
  alternate: Fiber | null;

  // 作为调度优先级的属性
  lanes: Lanes;
  childLanes: Lanes;
  
  ...
};
