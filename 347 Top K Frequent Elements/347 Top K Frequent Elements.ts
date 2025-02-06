function topKFrequent(nums: number[], k: number): number[] {
  if (nums.length === k) return nums;

  const numsMap: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (numsMap.has(nums[i])) {
      numsMap.set(nums[i], numsMap.get(nums[i])! + 1);
    } else {
      numsMap.set(nums[i], 1);
    }
  }

  return [...numsMap]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((e) => e[0]);
}
