class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        count = [0] * 26
        for i in range(len(s)):
            count[ord(s[i]) - ord('a')]+=1
        for i in range(len(t)):
            count[ord(t[i]) - ord('a')]-=1

        for i,num in enumerate(count):
            if num != 0:
                return False
        return True
        