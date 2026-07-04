class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let leftMax = height[0];
        let rightMax = height[height.length-1];
        let l = 0;
        let r = height.length-1;
        let max_area = 0;

        while(l<r){
            if(leftMax<rightMax){
                l++;
                leftMax = Math.max(leftMax,height[l]);
                max_area += leftMax - height[l]
            }else{
                r--;
                rightMax = Math.max(rightMax,height[r]);
                max_area += rightMax - height[r]
            }
        }

        return max_area;
    }
}
