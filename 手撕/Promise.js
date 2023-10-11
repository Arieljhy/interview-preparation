/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length === 1) return strs
    let res = strs.reduce((pre,cur)=>{
        let str  = cur.split('').sort().join('');
          console.log("str",str,pre)
        if(pre.has(str)){
            let arr = pre.get(str);
            console.log("xx",[...arr,cur])
            pre.set(str ,[...arr,cur])
        }else{
          
            pre.set(str,[cur])
              console.log("pre",pre)
        }
        return pre
     
    },new Map())
    return[...res.values()]

};
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
let res = groupAnagrams(strs)
console.log("ok",res)