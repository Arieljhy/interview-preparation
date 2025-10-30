/**
 * for...in
 * 用于遍历对象的 可枚举属性（包括对象自身的属性和继承的属性）。
 * 典型场景：遍历普通对象的键（key）。
 * for...of
 * 用于遍历 可迭代对象（Iterable）的元素值（value）。
 * 典型场景：遍历数组、字符串、Map、Set、NodeList 等实现了 [Symbol.iterator] 接口的数据结构。 
 */

/**
 * 1、for in用于遍历 可枚举属性(包括原型链上的可枚举属性)，
 * 2、for of用于遍历变量中的  可迭代属性的的值 再举个例子
 * 3、XXX.hasOwnProperty 用来判断一个属性是定义在对象本身而不是继承自原型链的。 
 */
let str = 'hgvdebcjn ';
let obj = {id:1, name:'ariel'};
let arr = [2,4,18,0,'jsdhgc',NaN,'',true,false]
let set = new Set().add('hjbdjc').add('hsjb')
let map = new Map().set(0,'hjbdjc').set(1,'hsjb').set('222',"value2")
// for(let key in set){
//     console.log(key)
// }

// for(let [key,value] of map){
//     console.log(key,value)
// }
console.log(map.entries())
for(let key of map.keys()){
    console.log(key)
}

