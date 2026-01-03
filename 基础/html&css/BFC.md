块级格式化上下文，独立的元素容器、内部的布局不会影响到 外部的元素

常见的触发方法：
- float
- overflow:  hidden、auto 或 scroll (除了 visible)
- position: absolute 或 fixed
- display: flex/ grid inline-block;

主要作用场景：
- 清除内部浮动：防止父元素 因子元素浮动 而造成内部塌陷
- 防止外边距合并：使属于 不同 bfc 相邻元素的外边距不再重叠
- 阻止元素被浮动覆盖
