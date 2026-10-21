class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    const openingBracket ='({[';
    const stack  = [];
    for(const char of s){
        if(openingBracket.includes(char)){
            stack.push(char);
        }
        else{
            if(stack.pop() !== pairs[char]) return false
        }
    }
    if(stack.length === 0) return true;
    else return false
    }
}
