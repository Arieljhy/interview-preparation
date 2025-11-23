// 问obj是否可以访问到one和two方法
function obj(){}
Function.prototype.one = function(){}
Object.prototype.two = function(){}
obj = new Obj()