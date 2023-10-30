/**
 * @param {string} s
 * @return {boolean}
 */
var map = new Map().set(")","(").set("]","[").set("}","{"); 
var isValid = function(s) {
    if(!s.length) return false;
    let stack = [];
    for(let i = 0 ; i <s.length ; i++ ){
        if(s[i] === "(" || s[i] === "{" || s[i] === "["){
            stack.push(s[i])
        }
        else{
            if(stack[stack.length-1] !== map.get(s[i]) ){
                 return false
            }else{
               stack.pop() 
            } 
        }
    }
    return stack.length === 0 ? true: false
};
