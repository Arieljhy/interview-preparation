// 千分位转换是指将数字转换为每三位用逗号分隔的字符串，例如将1000转换为"1,000"
function toThousands1(num) {
  return num.toLocaleString('en-US');
}


const toThousands = (num) => {
    const [int, dec] = num.toString().split('.');
    const intArr = [...int];
    const isNeg = intArr[0] === '-';
    isNeg && intArr.shift();

    const len = intArr.length;
    let res = '', k = 3;
    for (let i = len - 1; i >= 0; i--) {
        if (k > 0) {
            res = intArr[i] + res;
            k--;
        } 
        if (k === 0 && i) {
            res = ',' + res;
            k = 3;
        }
    }
    return `${isNeg ? '-' : ''}${dec ? `${res + '.'+ dec}` : `${res}`}`
}
// 测试
console.log(toThousands(1234567.89)); // "1,234,567.89"
console.log(toThousands(123456789));  // "123,456,789"