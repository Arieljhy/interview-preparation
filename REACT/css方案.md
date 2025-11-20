#### 选型考量
- 样式隔离
- 解决全局命名冲突

#### 当前几种选型
`CSS MODULES`：
- 作用域：构建时隔离
  - 纯 css 文件
  - 支持预处理器 sass less


`CSS-IN-JS`：
styled-components、emotion
- 作用域：运行时隔离
  - 支持动态样式
  - 

`tailwind`：
- 作用域：运行时隔离
  - 直接在jsx中的className 直接 拼接
  - 通过 PurgeCSS 最终产物体积较小

