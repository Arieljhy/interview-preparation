
const dfsTree = (node) => {
  const nodeList = [];
  const dfs = (node, list) => {
    if (!node) return;
    list.push(node.value);
    node.children.forEach(e => dfs(e, list));
  }
  dfs(node, nodeList);
  return nodeList;
}

 