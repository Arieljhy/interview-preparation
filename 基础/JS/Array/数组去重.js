/**
 * 对于基本数据类型，首选set做去重，对于对象数组，使用map结合指定key值去重
 */

// 基础数据类型 （注意： NaN 的去重）
let arr = [8,3,4,6,1,2,3,4,3,2,1,5,6,7,8,9,0,10,99,88,99, NaN, NaN];
// 数组对象类型
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
];

  // 支持 基本类型 + 对象数组 去重
  const unique = (arr, key) => {
    if (!key) return new [...Set(arr)]; // 可以处理NaN

    const map = new Map();
    console.log('arrrr', arr)
    return arr.filter(item => {
      if (map.has(item[key])) return false;
      map.set(item[key], item);
      return true;
    })
  }

  console.log('unique进阶版', unique(arrObj, 'id'))


/**
 * 基础数据类型数组去重
 */


const unique1 = (arr) => [...new Set(arr)];
    //  (arr) => Array.from(new Set(arr))

const unique2 = (arr) => {
    let res = [];
    arr.forEach((item) => !res.includes(item) && res.push(item))
    return res;
}

const unique3 = (arr) => {
    return arr.reduce((prev, cur) => {
        !prev.includes(cur) && prev.push(cur);
        return prev;
    }, [])
}

// 注意：indexOf 底层是通过严格相等判断的 所以无法将NaN去重
const unique4 = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);

console.log(unique2(arr))


