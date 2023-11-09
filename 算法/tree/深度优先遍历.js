
const parentDOM = document.querySelector('#container');
// function  deepTravalSal(node){
// 	const nodes = [];
// 	const stack = [];
// 	if(node){
// 		stack.push(node);
// 		while(stack.length){
// 			const item = stack.pop();
// 			const len = item.children.length;
// 			nodes.push(item);
// 			for(let i = len - 1; i >= 0; i--){
// 				stack.push(item.children[i])
// 			}
// 		}
// 	}
// 	return nodes;
// }
// console.log(deepTravalSal(parentDOM));

// var hasPathSum = function(root, targetSum) {
//     if(!root) return 0
//     let ret = false
//     const dfs = (root,sum)=>{
//         if(!root) return
//         if(sum == targetSum && (!root.left && !root.right)){
//             ret = true
//         }
//         if(root.left) dfs(root.left,  root.left.val + sum)
//         if(root.right) dfs(root.right,  root.right.val + sum)
//     }
//     dfs(root,root.val)
//     return ret
// };



const deepTree0 = (node)=>{
    const nodeList = []
    const dfs = (node, nodeList) => {
        nodeList.push(node.name)
        node.children.forEach(e => dfs(e, nodeList))
      }
    dfs(node, nodeList);
    return nodeList;
}

const deepTree = (node)=>{
    let nodeList = []
    const dfs = (node , nodeList) => {
      nodeList.push(node.name);  
      node.children.forEach(e=>dfs(e,nodeList))
    }
    dfs(node,nodeList);
    return nodeList;
}

 