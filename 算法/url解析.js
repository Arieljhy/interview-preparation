const urlParse = (urlStr)=>{
    let params = urlStr.split('?')[1];
    let res = {};
    for(let item of params.split('&')){
        let [key,value] = item.split('=');
        res[key] = value;
    }
    return res;
}
let res  = urlParse("https://juejin.cn/search?searchId=20231031194227157F320D340BD7C57D03&query=%E5%BE%AE%E4%BF%A1%E7%BA%A2%E5%8C%85%E7%AE%97%E6%B3%95&fromSeo=0&fromHistory=0&fromSuggest=0&enterFrom=home_page");
// console.log(res)