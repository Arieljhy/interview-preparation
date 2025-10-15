// 创建重叠度观察器
let isLoading = false;
const ob = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            // 避免重复加载
            if (!isLoading) {
                isLoading = true;
                // 加载更多
                // more()
                isLoading = false;
            }
        }
    }

},{
    root: null, // 视口
    threshold: 0.3, // 重叠阈值, 范围 0-1
});