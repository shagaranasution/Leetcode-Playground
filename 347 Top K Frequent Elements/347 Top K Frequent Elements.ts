function topKFrequent(nums: number[], k: number): number[] {
  const frequent = new Map<number, number>();

  for (const num of nums) {
    frequent.set(num, (frequent.get(num) || 0) + 1);
  }

  return [...frequent]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((t) => t[0]);
}
