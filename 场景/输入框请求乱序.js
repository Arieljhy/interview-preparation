/**
 * 用户输入query触发的搜索方法
 * @param {*} baseUrl 
 * @param {*} query 
 */
let controller;
const querySearch = async (baseUrl, query) => {
    // 取消正在发送的请求
    controller && controller.abort();
    controller = new AbortController();
    const list = await fetch(baseUrl + '/search?key=' + query, {
        signal: controller.signal
    }).then(res => res.json());
    // 将返回数据渲染成下拉列表
    // renderList(list);
}