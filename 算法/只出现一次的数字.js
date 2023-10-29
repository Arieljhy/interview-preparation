//只出现一次的数字
const compareVersion = (v1,v2)=>{
    if(!v1 || !v2) return;
    const v1Arr = v1.split('.');
    const v2Arr = v2.split('.');
    const maxLen = Math.max(v1Arr.length , v2Arr.length);
    for(let i = 0 ; i < maxLen ; i++){
        const v1Val = v1Arr[i] || 0;
        const v2Val = v2Arr[i] || 0;
        if(v1Val === v2Val) continue;
        if(v1Val > v2Val){
            return 1;
        }else{
            return -1
        }

    }
    return 0;
}
if(!v1 || !v2) return;
const v1Arr = v1.split('.');
const v2Arr = v2.split('.');
const maxLen = Math.max(v1Arr.length,v2Arr.length);
for(let i = 0; i<maxLen ; i++){
    const v1Val = v1Arr[i] || 0;
    const v2Val = v2Arr[i] || 0;
    if(v1Val === v2Val) continue;
    if(v1Val > v2Val){
        return 1
    }else if(v1Val < v2Val){
        return -1
    }
}
return 0;

