# tree-shaking
 - 原理：
     依赖于ES6的静态语法 import 和 export，在编译的时候 静态导入，不适合动态导入的文件
     通过 静态分析代码的依赖关系 来 确定 哪些模块、变量、函数在代码中 没有被引用，把未使用的部分从最终的构建输出中删除

