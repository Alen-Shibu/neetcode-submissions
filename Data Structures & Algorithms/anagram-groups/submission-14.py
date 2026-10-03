class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = {}
        for word in strs:
            count = [0] * 26
            for char in word:
                count[ord(char) - ord('a')] += 1
            res = tuple(count)
            if not res in map:
                map[res] = [word]
            else:
                map[res].append(word)
            
        return list(map.values())