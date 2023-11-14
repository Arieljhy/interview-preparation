function fetch(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let s = url.split('.')[0];
            if(Number(s[s.length-1])%2){
                console.log("success",{success:url})
                resolve({success:url})
            }else{
                console.log("error",{error:url})
                resolve({error:url})
            }
            
        },2000)
    })
}
 async function getRes(urls){
    for(let i = 0 ; i < urls.length ; i++){
        let res = await new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    let s = urls[i].split('.')[0];
                    if(Number(s[s.length-1])%2){
                    
                        resolve({success:urls[i]})
                    }else{

                        resolve({error:urls[i]})
                    }
                    
                },2000)
                
                });
        console.log("res",res);
    }
    console.log("end");
} 
let p1 = 'https://url1.com';

let p2 = 'https://url2.com';

let p3 = 'https://url3.com';

let p4 = 'https://url4.com';

let urls = [p1,p2,p3,p4];
getRes(urls);
