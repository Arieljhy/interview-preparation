/**
 * @param {string} s
 * @return {boolean}
 */
const s = '[]({})'
var isValid = function(s) {
    const map = new Map().set("(",")").set("[","]").set("{","}"); 
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }
        else {
            const curChar = stack[stack.length - 1];
            if (map.get(curChar) !== char) return;
            stack.pop();
        }
    }
    return !stack.length;
};
console.log(isValid(s))
