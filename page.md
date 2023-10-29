# 如何实现子元素垂直居中
 - display;flex justify-content:center;align-items:center;
 - 父 text-align:center; 子 margin:0 auto;
 父 relative
 - 1、子 absolute margin-top:-高度二分之一;margin-left:-宽度二分之一;
 - 2、子 absolute transform:translate(-50%,-50%)
 - 3、子 absolute top/left/right/bottom:0; margin:auto
# 2、transition 和 animation 有什么区别
 - transition ：过渡,transition只能从一种状态过渡到另一种状态，animation可以定制复杂动画
 - transition必须通过一些行为才能触发（js或伪类），animation的话直接就可以触发
   - transition优先选择transform，尽量不要使用height，width，margin和padding。某个动画涉及到布局或者绘制的调整，就会涉及到主线程的重新计算，自然会慢很多。
   -requestAnimationFrame能够做到，精准严格的卡住显示器刷新的时间，
# 伪类与伪元素的区别在于，
    - 伪类以单冒号（:）表示，用于选择DOM元素的特定状态；
    - 而伪元素以双冒号（::）表示，用于选择DOM元素的特定部分或特定状态。

# 3、箭头函数 和 普通函数区别

# 4、preload 、prefetch 的区别
- link 标签的 preload 属性：用于提前加载一些需要的依赖，这些资源会优先加载,实现关键资源的提前加载;并且不会阻塞 onload 事件；加载的 JS 脚本其加载和执行的过程是分离的
- prefetch 是利用浏览器的空闲时间，加载页面将来可能用到的资源的一种机制；通常可以用于加载其他页面（非首页）所需要的资源，以便加快后续页面的打开速度
# 5、defer 和 async

# position 有哪些
# less 和 sass 有什么区别

# webpack 构建流程
# tree-shaking 原理
# webpack 什么阶段生成树形图谱
# loader 和 plugin 的区别是什么
    - 执行时机分别是什么
    - 如何实现一个loader || plugin

# keep-alive 的原理

# v-model
        <!-- v-model -->
        <input v-model="..." />
        <!-- v-model 就是 :value + @input 组合的语法糖-->
        <input :value="..." @input="..." />

        <!-- 当加了 .lazy 修饰符之后 -->
        <input v-model.lazy="..." />
        <!-- v-model 就变成了 :value + @change 组合的语法糖 -->、
        <input :value="..." @change="..." />
# vue 如何进行性能优化 
# HTTP 三次握手四次分手
# HTTP 和 HTTPS 的区别
# 

