//防抖
function debounce(fn,delay) {
    let timer;
    return () => {
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>fn(),delay)
    }

}
//节流
function throttle(fn ,delay){
    let timer
    return () => {
        if(timer) return;
        timer = setTimeout(()=>{
            fn();
            clearTimeout(timer);
        },delay)
    }

}