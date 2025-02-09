function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;

  let longestConsecutiveLength: number = 1;
  const numsSet: Set<number> = new Set(nums);

  for (const num of numsSet) {
    if (numsSet.has(num - 1)) continue;

    let currentLongestConsecutiveLength: number = 1;

    while (numsSet.has(num + currentLongestConsecutiveLength)) {
      currentLongestConsecutiveLength++;
    }

    longestConsecutiveLength = Math.max(
      longestConsecutiveLength,
      currentLongestConsecutiveLength
    );
  }

  return longestConsecutiveLength;
}
