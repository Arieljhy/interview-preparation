/**
 * 数组 和 树 的 相互转化
 */
let list  = [
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

// const arrayToTree = (arr,pid) => {
//     return arr.reduce((prev,cur)=>{
//        if(cur['pid'] === pid){
//           cur.children = arrayToTree(arr,cur.id);
//           prev = prev.concat(cur)
//        }
//        return prev
//     },[])
// }
// // let tree = arrayToTree1(list,0)



// const arrayToTree1 = (arr,id) => {
//     return arr.reduce((prev,cur)=>{
//         if(cur['pid'] === id){
//             cur.children = arrayToTree1(arr,cur.id);
//             prev = prev.concat(cur);
//         }
//         return prev
//     },[])
// }
// // let tree = arrayToTree1(list,0)
// //  console.log("tree",tree)
// const treetoArray = (tree)=>{
//     return tree.reduce((prev,cur) => {
//         let { children , ...args} = cur;
//         return prev.concat(children && children.length!==0 ? treetoArray(children):[], args)
//     },[])
// }
// //console.log("treetoArray:",treetoArray(tree))
// // console.log("list",list,tree)
// const arrayToTree0 = (arr , id)=>{
//     return arr.reduce((prev,cur)=>{
//         if(cur['pid'] === id){
//             cur.children = arrayToTree0(arr,cur.id);
//             prev = prev.concat(cur)
//         }
//         return prev
//     },[])
// }


const arrayToTree = (arr,id) => {
    return arr.reduce((prev,cur)=>{
        if(cur['pid'] === id){
            cur.children = arrayToTree(arr,cur.id);
            prev = prev.concat(cur)
        }
        return prev
    },[])

}
const arrayTotree = (arr, id)=>{
    return arr.reduce((res,cur)=>{
        
    },[])
}

// console.log("arrayToTree",tree);
// const treeToArray = (treeArr)=>{
//     return treeArr.reduce((res , cur)=>{
//         let {children , ...args} = cur;
//         return res.concat(children && !children.length ? treeToArray(children) : [],args)
//     },[])
// }
let treeArr = arrayToTree(list,0)
const treeToArray = (tree)=>{
    return tree.reduce((prev,cur) => {
        let { children , ...args} = cur;
        return prev.concat(children && children.length !==0? treeToArray(children):[], [args])
    },[])
}
console.log("treeToArray",treeToArray(treeArr));


