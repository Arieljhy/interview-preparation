/**
 * 1、判断类型
 *   - typeof 
 *          引用类型 ， 除了 function 其余都会返回 object
 *          typeof null 会返回 'object';
 *          typeof NaN -> 'number';
 *          typeof fn() -> 'function'
 * 
 *   - instanceof 
 *          只可以 判断 引用类型;
 *          不能用于 检测 基本数据类型 undefined null
 *       
 *   - Object.prototype.toString.call() [object Array]
 * 
 *   - constructor
 * 
 *   - Array.isArray()
 * 
 *   - Number.isNaN()
 * 
 *   - Number.isFinite()
 * 
 * 2、类型转换
 *      Number() parseInt() parseFloat()
 *      隐式转换
 *  **经典面试题
 *  let arr = [1,2,3,4];
 *      arr = arr.map(parseInt);
 *      console.log(arr); 第二个 参数 将要转化的进制。。。
 *          
 *    
 * 
 */