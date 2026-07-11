class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s2.length < s1.length) return false;
        
        const len = s1.length;
        const array = new Array(26).fill(0)

        for(let i=0;i<s1.length;i++){
            array[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }

        const actual = array.join('#')

        let l = 0;
        let arr = new Array(26).fill(0)
        for(let r=len-1;r<s2.length;r++){

            if(l===0){       
                for(let i=l;i<=r;i++){
                    arr[s2.charCodeAt(i) - 'a'.charCodeAt(0)]++;
                }
                }else{
                    arr[s2.charCodeAt(l-1) - 'a'.charCodeAt(0)] --;
                    arr[s2.charCodeAt(r) - 'a'.charCodeAt(0)] ++;
                }


            const test = arr.join('#')

            if(actual === test) return true;
            l++;
        }

        return false;
    }
}
