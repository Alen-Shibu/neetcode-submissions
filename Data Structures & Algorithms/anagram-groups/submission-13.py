class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        count = {}
        for word in strs:
            word_count = [0] * 26
            for char in word:
                word_count[ord(char) - ord('a')] += 1
            result = tuple(word_count)
            if result not in count:
                count[result] = [word]
            else:
                count[result].append(word)
        return list(count.values())
        