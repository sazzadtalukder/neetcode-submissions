class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i=0;i<nums.length;i++){
            const anotherValue = target-nums[i]
            if(map.has(anotherValue)){
                return [map.get(anotherValue), i]
            }
            map.set(nums[i],i)
        }
    }
}
