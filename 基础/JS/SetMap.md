#### Set
    - 无序的、相关联，且不重复的内存结构组成的组合。
    - size: 返回集合中所包含的元素的数量
    - add(value): 向集合中添加一个新的项
    - delete(value): 从集合中删除一个值
    - has(value): 如果值在集合中存在，返回ture, 否则返回false
    - clear(): 移除集合中的所有项
    - keys(): 返回键名的遍历器
    - values(): 返回键值的遍历器 (由于 Set 没有键名只有键值，所有 keys 和 values 效果一致)
    - entries(): 返回键值对的遍历器
    - forEach(): 使用回调函数遍历每个成员

  #### weakSet
    - 元素只能是对象
    - 元素中的对象都是弱引用,不使用的时候会被垃圾回收
    - 无法遍历，但是 可以 get set has

  #### Map
    -  有序的，键值对 键的类型可以是引用类型
    - size: 返回 Map 结构的元素总数
    - set(key, value): 向 Map 中加入或更新键值对
    - get(key): 读取 key 对用的值，如果没有，返回 undefined
    - has(key): 某个键是否在 Map 对象中，在返回 true 否则返回 false
    - delete(key): 删除某个键，返回 true, 如果删除失败返回 false
    - clear(): 删除所有元素
    - keys()：返回键名的遍历器
    - values()：返回键值的遍历器
    - entries()：返回所有成员的遍历器
    - forEach()：遍历 Map 的所有成员


  #### weakMap
   - 键只能是 对象 
   - 键名所指向的对象，不计入垃圾回收机制（同 WeakSet）