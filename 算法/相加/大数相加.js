const addBigNum = (num1, num2) => {
    let i = num1.length, j = num2.length;
    let carry = 0;
    let res = '';
    while (i >= 0 || j >= 0 || carry) {
        const n1 = i >= 0 ? parseInt(num1[i]) : 0;
        const n2 = j >= 0 ? parseInt(num2[j]) : 0;
        const sum = n1 + n2 + carry;
        carry = Math.floor(sum / 10);
        res = (sum % 10) + res;
        i--;
        j--;
    }
    return carry ? carry + res : res;
}

/**
 * 现代解决方案
 * BigInt ES2020引入的原生BigInt类型
 * 
 * 使用n后缀创建BigInt:  原生支持、语法简洁、支持所有运算
 */

const bigNumA = 90173345678956473n;
const bigNumB = 12345678901234567890n;
const sum = bigNumA - bigNumB;
console.log(sum.toString());