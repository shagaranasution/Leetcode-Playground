function threeSum(nums: number[]): number[][] {
  const results: number[][] = [];
  const numsSorted: number[] = [...nums].sort((a, b) => a - b);

  for (let i = 0; i < numsSorted.length && numsSorted[i] <= 0; i++) {
    if (i === 0 || numsSorted[i] !== numsSorted[i - 1]) {
      let left: number = i + 1;
      let right: number = numsSorted.length - 1;

      while (left < right) {
        const sum: number =
          numsSorted[i] + numsSorted[left] + numsSorted[right];

        if (sum === 0) {
          results.push([numsSorted[i], numsSorted[left], numsSorted[right]]);
          left++;
          right--;

          while (left < right && numsSorted[left] === numsSorted[left - 1]) {
            left++;
          }
        } else if (sum < 0) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return results;
}
