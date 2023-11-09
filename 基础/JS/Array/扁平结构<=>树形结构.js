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

const arrayToTree = (arr,id) => {
    return arr.reduce((pre,cur)=>{
        if(cur.pid === id){
            cur.children = arrayToTree(arr,cur.id)
            pre = pre.concat(cur);
        }
        return pre;
    },[])
}
console.log();



const treeToArray = (tree) => {
    return tree.reduce((pre,cur)=>{
        let {children , ...i} = cur;
        return pre.concat(children && children.length ? treeToArray(children):[],i)
    },[])
}


 console.log(treeToArray(arrayToTree(data,0)));