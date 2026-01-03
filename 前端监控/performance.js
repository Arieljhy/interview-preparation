// 1、创建观测器，浏览器在记录到相关 性能 条目时，会自动 异步 触发相关回调
const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        console.log('指标名称', entry.name);
        console.log('开始时间', entry.startTime);
        console.log('持续时间', entry.duration);
        if (entry.entryType === 'layout-shift') {
            console.log('CLS值：', entry.value)
        }
    }
});
// 2、指定观测目标，明确指定希望监听的性能指标类型
observer.observe({
    entryType: ['layout-shift', 'largest-contentful-paint', 'first-input']
})

// 实时性：事件驱动，无需轮询； 
// 低开销：异步执行的，不阻塞主线程；
// 可扩展：支持多种性能事件类型
// 易集成：适用于现代的前端监控体系
