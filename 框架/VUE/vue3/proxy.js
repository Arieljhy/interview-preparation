const target = {
    name:'Ariel',
    age:22
}
const handler = {
    get(target , key , receiver){
        return Reflect.get(target,key,receiver)
    },
    set(target , key ,value, receiver){
        return Reflect.set(target,key,value,receiver)
    },
    deleteProperty(target,key){
        return Reflect.deleteProperty(target,key)
    } 
}
const proxy = new Proxy(target , handler);


