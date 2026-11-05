class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        hashmap = {}
        res = []
        for word in strs:
            freqCount = [0] * 26
            for char in word:
                freqCount[ord(char)-ord('a')]+=1
            charHash = str(freqCount)
            if charHash in hashmap:
                hashmap[charHash].append(word)
            else:
                hashmap[charHash] = [word]

        return list(hashmap.values())