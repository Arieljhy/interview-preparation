/**
 * 解决问题：
 * +0 === -0   //true
 * NaN === NaN   // false
 */
Object.is()
const is = (x, y) => {
    if(x === y){
        return x!== 0 || y!== 0 || 1/x === 1/y;
    } else {
        return x !== x && y !== y;
    }
}
/**
 * Object.assign() 
 * 是浅拷贝
 */

let obj = {id:123,name:"ariel"};


console.log('1:', Object.keys(obj) )  //[ 'id', 'name' ]

console.log('2:', Object.values(obj) )  // [ 123, 'ariel' ]

console.log('3:',Object.entries(obj) )  // [ [ 'id', 123 ], [ 'name', 'ariel' ] ]

//Object.getOwnPropertyNames()  会返回对象得所有属性，包括 不可枚举属性
console.log('4:',Object.getOwnPropertyNames([]) )//[ 'length' ]

//Object.getOwnPropertySymbols()  会返回对象得所有属性，包括 不可枚举属性
let sym = Symbol('k');
obj[sym] = 'xx';

console.log('5:',Object.getOwnPropertySymbols(obj) )//[Symbol(k)]

