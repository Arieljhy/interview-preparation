var count = 1;
var test = function(){
    console.log('start');
    setTimeout(()=>{
        console.log(this.count,11);
    },10)
    setTimeout(()=>{
        console.log(this.count);
    },0)
    new Promise(resolve=>{
        resolve()
    }).then(()=>{
        console.log('promise')
    })
    console.log('end')
}

// test.call({count})