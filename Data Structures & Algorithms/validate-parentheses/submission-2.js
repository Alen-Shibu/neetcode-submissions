class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            "(" : ")",
            "{" : "}",
            "[" : "]"
        };

        let stack = [];

        for(let ch of s){
            if(ch ==='(' || ch ==='{' || ch === '['){
                stack.push(ch);
                continue;
            }

            const x = stack.pop();
            if(ch !== pairs[x]) return false;
        }

        return stack.length === 0;
    }
}
