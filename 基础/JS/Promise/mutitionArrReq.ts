const multiRequest1 = (urls: string[] = [], maxNum: number) => {
    const len = urls.length;
    const res = new Array(len).fill(false);
    let count = 0; // 当前请求的数量
    return new Promise((resolve, reject) => {
        const next = () => {
            let cur = count;
            count++;
            if(cur >= len){
                // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
                !res.includes(false) && resolve(res);
                return;
            }

            const url = urls[cur];
            fetch(url).then((val) => {
                res[cur] = {status: 'success', value: val};
            }).catch((err) => {
                res[cur] = {status: 'error', error: err};
            }).finally(() => {
                if (cur < len) next();
            })
        }
        while(count < maxNum){
            next();
        }
    })
}