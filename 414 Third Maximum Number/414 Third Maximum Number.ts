// T = O(n)
// S = O(1)
function thirdMax(nums: number[]): number {
  const sortedDistinc = [...new Set<number>(nums)].sort((a, b) => b - a);

  return sortedDistinc.at(2) ?? sortedDistinc[0];
}

// T = O(n log n)
// S = O(n)
function thirdMax2(nums: number[]): number {
  let first: number | null = null;
  let second: number | null = null;
  let third: number | null = null;

  for (const num of nums) {
    if (num === first || num === second || num === third) continue;

    if (first === null || num > first) {
      [first, second, third] = [num, first, second];
    } else if (second === null || num > second) {
      [second, third] = [num, second];
    } else if (third === null || num > third) {
      third = num;
    }
  }

  return third ?? first ?? -1;
}
