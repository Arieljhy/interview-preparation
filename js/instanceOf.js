function myInstanceOf(instance , constructor){
    let proto = instance.__proto__;
    while(proto){
        if(proto === constructor.prototype){
            return true
        }else{
            proto = proto.__proto__;
        }
    }
    return false;
}