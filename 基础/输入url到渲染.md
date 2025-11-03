#### 浏览器在输入url到渲染，中间发生了什么
输入URL → DNS解析 → TCP连接 → HTTP请求 → 服务器处理 → HTTP响应 → 
浏览器解析 → 构建DOM树 → 构建CSSOM树 → 构建渲染树 → 布局 → 绘制 → 合成

`DNS解析流程：浏览器缓存 → 系统缓存 → 路由器缓存 → ISP DNS缓存 → 递归查询`

` 浏览器渲染引擎工作流程: 
1）解析HTML，构建DOM树 
2）解析CSS，构建CSSOM树
3）执行JavaScript（可能阻塞解析）
4）构建渲染树（Render Tree）
5）布局（Layout/Reflow）
6）绘制（Paint）
7）合成（Compositing）`

#### 讲一讲浏览器渲染过程中的合成阶段
图层收集与排序
生成合成树
计算图层的合成属性
提交给GPU进行合成
显示最终图像