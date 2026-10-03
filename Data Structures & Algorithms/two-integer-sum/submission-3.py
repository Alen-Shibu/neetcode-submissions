class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for i in range(len(nums)):
            diff = target - nums[i]
            if map.get(diff) is not None:
                return [map[diff],i]
            else:
                map[nums[i]] = i;