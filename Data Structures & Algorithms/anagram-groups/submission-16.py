class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        words = {}
        for word in strs:
            freqCount = [0] * 26
            for char in word:
                freqCount[ord(char) - ord('a') ] += 1
            tup = tuple(freqCount)
            if not tup in words:
                words[tup] = [word]
            else:
                words[tup].append(word)

        return list(words.values())