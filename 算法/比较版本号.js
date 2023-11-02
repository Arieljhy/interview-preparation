const compareVersion = (version1,version2)=>{
    let len1 = version1.length, len2 = version2.length;
    let arr1 = version1.split('.'),
        arr2 = version2.split('.');
    for(let i = 0 ; i < Math.max(len1,len2) ; i++){
       let  val1 = arr1[i] || 0;
       let  val2 = arr2[i] || 0;
       if(val1 === val2){
        continue;
       }else if(val1 > val2){
        return 1;
       }else{
        return -1;
       }

    }
    return 0;// v1 v2 相等
}