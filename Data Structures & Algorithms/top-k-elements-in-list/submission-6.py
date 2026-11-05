class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hashmap = {}
        for num in nums:
            if not num in hashmap:
                hashmap[num] = 1
            else:
                hashmap[num] = hashmap[num] + 1

        sortedKeys = sorted(hashmap, key=lambda x: hashmap[x], reverse=True)[:k]

        return sortedKeys