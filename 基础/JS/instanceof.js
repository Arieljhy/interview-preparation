function myInstanceof(instance , constructor){
    if(instance === null || typeof instance !== 'object' && typeof instance !== 'function') return false;
    let proto = instance.__proto__;
    //let proto = Object.getPrototypeOf(instance)
    while(proto){
        if(proto === constructor.prototype){
            return true
        }else{
            proto = proto.__proto__;
        }
    }
    return false;
}
let f = function (){}
console.log(myInstanceof(f,Object))
