var count = 1;
var test = function(){
  var count = 3
    console.log('start');
    setTimeout(()=>{
        console.log(this.count,"ffff");
    },10)
    setTimeout(()=>{
        console.log(this.count,"++0");
    },0)
    new Promise(resolve=>{
        resolve()
    }).then(()=>{
        console.log('promise')
    })
    console.log('end')
    console.log(count,"e+");
}
 test.call({count:2})
  console.log(count,"e");