#### requestAnimationFrame
浏览器 专门提供的，专门用于 高性能 流畅动画的 js Api, 
核心设计理念是：与浏览器的渲染周期保持同步
浏览器的一帧 大约 16.6ms

```js
    const requestId = window.requestAnimationFrame(callbackFn);
    window.cancelAnimationFrame(requestId);
    // timestamp 高精度时间戳
    let start;
    function step(timestamp) {
        if (!start) start = timestamp;
    }
```