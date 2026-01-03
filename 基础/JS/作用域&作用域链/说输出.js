// console.log(typeof func);
// var func = 123;
// function func() {}
// console.log(typeof func);

// var a = 1;
//     console.log('wai', a);
// function test() {
//     console.log(a);
//     var a = 2;
//     console.log(a);
// }
// test();

var name = "global";
function outer() {
    var name = "outer";
    function inner() {
        console.log(name);
    }
    return inner;
}
var func = outer();
func();

// var a = 1;
// const b = () => {
//     a = 10;
//     console.log(a);
//     return;
//     // function a() {}
// }
// b();
// console.log(a);