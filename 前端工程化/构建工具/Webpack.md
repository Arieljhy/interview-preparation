## Webpack
 - 模块打包
 - 编译转换
 - 能力扩展

## webpack 的构建流程
 - 初始化：启动构建，读取与合并配置参数，加载Plugin，实例化Compiler。
 - 编译：从entry出发，针对每个Module串行调用对应loader去编译转化文件内容，找到相关模块，递归地进行编译处理。
 - 输出：将编译后的模块组合成chunk,将chunk转化为文件，输出到文件系统中。

## 常见loader 有哪些
 - image-loader
 - file-loader
 - sass-loader
 - less-loader
 - style-loader
 - 


## webpack 打包流程
 - 
