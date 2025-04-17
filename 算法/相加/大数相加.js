const addBigNum = (num1, num2) => {
    let len1 = num1.length, len2 = num2.length;
    let carry = 0;
    let res = '';
    while(i < Math.max(len1,len2)){
        let n1 = i < len1 ? parseInt(num1[i] ) : 0;
        let n2 = i < len2 ?   parseInt(num2[i] ) : 0;
        let sum = n1 + n2 + carry;
        carry = Math.floor(sum / 10);
        res = ( sum % 10 )+ res
    }
    return carry === 1 ? `1${res}`:res;
}