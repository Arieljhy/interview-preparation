/**
 * 1、在全局上下文中，this指向 全局对象 ，比如window(非严格模式下是window, 严格模式下是 undefined)。
 * 2、在对象方法中， this指向调用该方法的对象。
 * 3、在构造函数中，this指向新创建的实例对象。
 * 4、在事件处理函数中，this通常指向触发事件的dom元素。
 * 5、bind \ call \ apply this 指向第一个参数
 * 6、箭头函数中 this 指向声明时最外层的上下文，不可以被 强制改变
 */

const a = () => {
    console.log('a.this', this)
}
function b() {
  console.log('b.this', this)
}

b.apply(() => {
    console.log('a.this', this)
}, [])
    let outerVariable = "我在外部函数中";
function outerFunction() {
    // let outerVariable = "我在外部函数中";
         outerVariable = "我在外部函数中1111";
    function innerFunction() {
        console.log(outerVariable); // 可以访问 outerVariable
    }
    
    return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // 输出: "我在外部函数中"