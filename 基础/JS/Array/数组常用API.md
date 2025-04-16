## 数组 常用 API
 
    - push() pop() shift() unshift()
    
    - slice(start, end)  // 不改变原数组，截取不包括end，返回截取部分的数组
    - splice(start, count) // 改变原数组，count 是 0 为添加元素，其他为删除元素返回删掉元素数组
    
    - join()
    - reverse()
    - concat()
    - fill()
    - sort()
  
 ### 数组 遍历
    - forEach()
    - reduce()
    - map() // 不改变原数组，返回一个新数组
  
 ### 数组 查找
    - indexOf()
    - lastIndexOf()
    - findIndex()
    - includes()
    
    - filter()
    - some()
    - any()
    - every()
 
 ### 数组 转字 符串
    - toString()
    - toLocalString()
  
 ### 类数组 转化 为 数组
    - 类数组 它是一个对象，并且该对象有 length 属性
    - Array.from()
    - 扩展运算符
    - Array.prototype.slice.call()
  
 ### 判断 是否为 数组
    - Array.isArray()    // true 是 ，false 不是
 
