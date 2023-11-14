function fetch(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let s = url.split('.')[0];
            if(Number(s[s.length-1])%2){
                resolve(url)
            }else{
                reject(url)
            }
            
        },2000)
    })
}
let p1 = fetch('https://url1.com');

let p2 = fetch('https://url2.com');

let p3 = fetch('https://url3.com');

let p4 = fetch('https://url4.com');











// req("url1").then((value)=>{
//     console.log("1-",value)
// });
// req("url2").then((value)=>{
//     console.log("2-",value)
// });
// req("url3").then((value)=>{
//     console.log("3-",value)
// });
// req("url4").then((value)=>{
//     console.log("4-",value)
// });
// req("url5").then((value)=>{
//     console.log("5-",value)
// });
async function getData() {
    const promiselist = [];
    for (let i = 0; i < 100; i++) {
      const promise = fetch(`https://example.com/data${i}.json`);
      promiselist.push(promise);
    }
    const responses = await Promise.all(promiselist);
    for (const response of responses) {
      // handle each response here 
    }
  }
  