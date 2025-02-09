function groupAnagrams(strs: string[]): string[][] {
  if (strs.length < 2) {
    return [strs];
  }

  const map: Map<string, string[]> = new Map();
  const charCounts: number[] = Array(26);

  for (const str of strs) {
    charCounts.fill(0);

    for (let i = 0; i < str.length; i++) {
      charCounts[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const key: string = charCounts.join();
    map.set(key, [...(map.get(key) ?? []), str]);
  }

  return [...map.values()];
}
