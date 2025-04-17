/**
 * 防抖
 * 
 */
const debounce = (fn, delay) => {
    let timer = null;
    return function(...args) {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this,args)
        }, delay)
    }
}

/**
 * 节流
 * 节流就是连续触发的事件每隔规定时间只执行一次。
 * 场景：
 *  */ 
const throttle = (fn, delay) => {
    let time = 0;
    return function(...args) {
        let now = new Date().getTime();
        if (now - time > delay) {
            time = now;
            fn.apply(this, args);   
        }
    }
}

function fn(n) {
    console.log("res:",n)
}

let throttleFn = throttle(fn, 2000);

throttleFn(0)

setTimeout(() => {
    throttleFn(1)
},1000)

setTimeout(() => {
    throttleFn(2)
},3000)


