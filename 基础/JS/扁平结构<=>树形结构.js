/**
 * 扁平结构 和 树形结构 的 相互转化
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

const arrayToTree = (arr, id = 0) => {
    if (!arr || !arr.length) return [];
    return arr.reduce((prev, cur) => {
        if (cur.pid === id) {
            cur.children = arrayToTree(arr.filters(item => cur !== item), cur.id);
            prev = prev.concat(cur);
        }
        return prev;
    }, []);
}

const treeToArray = (tree) => {
    if (!tree || !tree.length) return [];
    return tree.reduce((prev, cur) => {
        let {children, ...others} = cur;
        return [...prev, others, ...treeToArray(children)];
    }, [])
}

  console.log('res:', treeToArray(arrayToTree(data)));