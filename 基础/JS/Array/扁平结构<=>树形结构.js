/**
 * 扁平结构 和 树形结构 的 相互转化
 * 
 */
let data = [
    { id: 1, pid: 0, name: '超市' },
    { id: 2, pid: 0, name: '生鲜区' },
    { id: 3, pid: 1, name: '零食区' },
    { id: 4, pid: 2, name: '大虾' },
    { id: 5, pid: 2, name: '猪肉' },
    { id: 6, pid: 13, name: '卫生纸' },
    { id: 7, pid: 3, name: '薯片' },
    { id: 8, pid: 7, name: '烧烤味' },
    { id: 9, pid: 7, name: '黄瓜味' }
];
const arrayToTree = (arr)=>{
    let res = [];
    let map = arr.reduce((prev,cur)=>{
        return prev.set(cur.id,{...cur,childen:[]})
    },new Map())
    arr.forEach((item)=>{
        map.has(item.pid) ?
        map.get(item.pid).childen.push(map.get(item.id)) : res.push(map.get(item.id))
      
    })
    return res;   
}
let tree = arrayToTree(data)
const treeToArray = (tree)=> {
    return tree.reduce((prev,cur)=>{
        let {childen , ...i} = cur;
        return prev.concat( childen && childen.length ? treeToArray(childen):[],i);
    },[])
}

console.log(treeToArray(tree));