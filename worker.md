### web Workers 和 server Workers
js 是单线程的，可以创建一个独立的worker线程，
Worker中的代码与主线程代码并行执行，互不阻塞。
- 创建一个Worker，指定后台脚本文件