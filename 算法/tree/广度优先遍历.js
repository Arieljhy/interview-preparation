const bfsTree = (node) => {
    const nodeList = [];
    const queue = [node];
    while (queue.length > 0) {
        const curNode = queue.shift();
        if (!curNode) continue;
        nodeList.push(curNode.value);
        curNode.children.forEach(e => {
            queue.push(e);
        });
    }
    return nodeList;
}