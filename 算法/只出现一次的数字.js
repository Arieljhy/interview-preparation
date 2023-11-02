const compareVersion = (v1,v2)=>{
    let len1  = v1.length,len2 = v2.length;
    let maxLen = Math.max(len1,len2);
    let v1Arr = v1.split('.');
    let v2Arr = v2.split('.');
    for(let i = 0 ; i < maxLen ; i++){
        let s1 = v1Arr[i] || 0;
        let s2 = v2Arr[i] || 0;
        if(s1 === s2){
            continue
        }else if(s1 > s2){
            return 1
        }else{
            return -1
        }
    }
    return 0

}