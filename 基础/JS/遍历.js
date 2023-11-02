/**
 * for of 可以遍历 字符串 。。数组。。等具有迭代器的数据
 * for in 可以遍历 对象
 * 迭代器：
 *      迭代器是一个对象，
 *      它具有一个 next 方法，
 *      该方法会返回一个对象，
 *      包含 value 和 done 两个属性:
 *          value 表示这次迭代的值
 *          done 表示是否已经迭代到序列中的最后一个
 * 
 * 1、for in用于遍历遍历  可枚举属性(包括原型链上的可枚举属性)，
 * 2、for of用于遍历变量中的  可迭代属性的的值 再举个例子
 * 3、XXX.hasOwnProperty 用来判断一个属性是定义在对象本身而不是继承自原型链的。
 */
let str = 'hgvdebcjn';
let obj = {id:1,name:'ariel'};
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

