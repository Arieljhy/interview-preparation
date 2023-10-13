/**
 * 数组 去除 空值 否值等
 */
let arr = [0,undefined,null,'',-1,2,false,true,1,NaN,{},[],,];
let res = arr.filter(Boolean);
console.log(res)