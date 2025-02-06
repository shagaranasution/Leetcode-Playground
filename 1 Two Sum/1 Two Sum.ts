function twoSum(nums: number[], target: number): number[] {
  const numsMap: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const remaining: number = target - nums[i];

    if (numsMap.has(remaining)) {
      return [numsMap.get(remaining)!, i];
    }

    numsMap.set(nums[i], i);
  }

  return [];
}
