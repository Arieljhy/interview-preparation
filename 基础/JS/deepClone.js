function deepClone(target){
    if(target === null ||  typeof target !== 'object') return target;
    if(target instanceof RegExp) return new RegExp(target);
    if(target instanceof Date) return new Date(target);

    let res = Array.isArray(target) ? [] :{};
    for(let key in target){
       if(target.hasOwnProperty(key)){
        res[key] = deepClone(target[key])
       }
    }

    return res;
}

/** 测试数据 */
let obj={
    name:"name",
    id:1,
    fn:function(){console.log(this.name)},
    date:new Date('2023-10-12'),
    new:{
        hai:'hai',
        hello:'hello',
        arr:[1,2,3,4],
        obj:obj
    }

}
let obj1 =JSON.parse(JSON.stringify(obj)) 
console.log(obj1)

// let objj = deepClone(obj)
// objj.name = 'Aril'
// console.log(obj)
// console.log(objj)