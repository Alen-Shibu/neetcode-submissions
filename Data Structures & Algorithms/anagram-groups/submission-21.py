class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        groups = {}
        for i,word in enumerate(strs):
            arr = [0] * 26
            for i in range(len(word)):
                arr[ord(word[i]) - ord('a')]+=1
            key = tuple(arr)
            if key in groups:
                groups[key].append(word)
            else:
                groups[key] = [word]
        res = []

        for val in groups.values():
            res.append(val)

        return res

        