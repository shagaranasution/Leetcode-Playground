function containsDuplicate(nums: number[]): boolean {
  const numsSet: Set<number> = new Set();

  for (const num of nums) {
    if (numsSet.has(num)) {
      return true;
    }

    numsSet.add(num);
  }

  return false;
}
