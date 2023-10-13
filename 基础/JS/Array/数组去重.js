/**
 * 数组去重
 * 
 */
let arr = [8,3,4,6,1,2,3,4,3,2,1,5,6,7,8,9,0,10,99,88,99]
const unique1 = (arr) =>{
    return [...new Set(arr)]
    // return Array.from(new Set(arr))
}
const unique2 = (arr)=>{
    let res = [];
    arr.forEach((item)=>{
        !res.includes(item) && res.push(item)
    })
    return res
}
const unique3 = (arr)=>{
    return arr.reduce((prev,cur)=>{
        prev.indexOf(cur) === -1 && prev.push(cur)
        return prev
    },[])
}
const unique4 = (arr)=>{
    return arr.filter((item,index)=>{
        return arr.indexOf(item) === index;
    })
}
console.log(unique2(arr))
/**
 * 数组对象类型 的 去重
 * 
 */
let arrObj = [
    {
      id: 1,
      name: '张三',
      age: 18,
      sex: 1
    },
    {
      id: 2,
      name: '李四',
      age: 20,
      sex: 2
    },
    {
      id: 1,
      name: '张三',
      age: 18,
      sex: 1
    },
    {
      id: 3,
      name: '王老五',
      age: 18,
      sex: 2
    },
    {
      id: 4,
      name: '王老五',
      age: 18,
      sex: 2
    }
  ]
  const uniObjArray = (arr)=>{
    let res = [];
    arr.forEach((item,index)=>{
        
    })
  }