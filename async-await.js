function *myAsync(){
    yield "1";
    yield "2";
    yield "jksdvcn";
    yield "sbdj";
    return "ok"
}
let as = new myAsync();
console.log(as.next())