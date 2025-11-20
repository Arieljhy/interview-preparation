#### webpack构建流程
- 根据配置文件生成compiler，注册相关插件
- 从入口文件开始编译，结合相应的loader进行相关文件的转化

#### vite
- 开发阶段：使用esbuild构建，利用浏览器支持es module 的方式，支持按需引入动态编译
- 打包阶段：rollup

#### 解决打包体积过大的问题是一个分析和实践相结合的过程：
1、核心思路：进行有效的代码分割、利用Tree Shaking、并压缩代码与资源。
`进行有效的代码分割:`
```js
// 将React相关库合并到一个chunk
'react-vendor': ['react', 'react-dom'],
// 将工具库单独分包
'utility-vendor': ['lodash-es', 'axios'],
// 将UI库单独分包
'ui-library': ['antd'],
```

2、关键手段：优化第三方库的使用方式，按需引入或寻找轻量替代。
`优化第三方库：`
- 按需引入：多数UI库（如Ant Design, Element Plus）都支持按需引入，可以借助相应的Vite插件或Babel插件实现。
- 寻找替代品：用更轻量的库替换大体积库，例如用dayjs替代moment.js；用lodash-es配合按需导入替代完整的lodash。
- 压缩图片等静态资源：可以使用vite-plugin-imagemin等插件在构建时自动压缩图片。

`善用分析工具：`
在优化前后，使用webpack-bundle-analyzer或vite-bundle-analyzer查看打包结果，直观地发现体积问题并验证优化效果。
