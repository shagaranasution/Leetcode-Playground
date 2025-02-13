function lengthOfLongestSubstring(s: string): number {
  let maxLength: number = 0;
  let startIndex: number = 0;
  const charsMap: Map<string, number> = new Map();

  for (let i = 0; i < s.length; i++) {
    if (charsMap.has(s[i])) {
      startIndex = Math.max(startIndex, charsMap.get(s[i])! + 1);
    }

    charsMap.set(s[i], i);
    maxLength = Math.max(maxLength, i - startIndex + 1);
  }

  return maxLength;
}
