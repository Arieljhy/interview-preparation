// 问obj是否可以访问到one和two方法
function Obj(){}
Function.prototype.one = function(){
    console.log('one')
}
Object.prototype.two = function(){
     console.log('two')
}
let obj = new Obj();
obj.one()
