/**
 * async/await 的本质 是js的语法糖
 * 底层实现原理： generator + 自动执行器
 * 执行器做了3件事情：
 * 1、递归调用 .next()自动执行
 * 2、用 Promise.resolve() 包装 yield 的值
 * 3、用 .throw() 去传递错误
 */

function *myAsync(){
    yield "1";
    yield "2";
    yield "jksdvcn";
    yield "sbdj";
    return "ok"
}
let as = myAsync();
console.log(as.next())


/**
 * 使用 generator 实现 async/await
 */

function run(genFn) {
    const it = genFn();
    function step(value) {
        const {value, done} = it.next(value);
        if (done) return Promise.resolve(result);
        Promise.resolve(value).then(val => step(val))
        .catch(err => {
            it.throw(err); // 把错误传回generator
            return step();
        })
    }
    return step();
}

