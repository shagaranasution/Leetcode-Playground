function mostFrequentEven(nums: number[]): number {
  const checkNumberIsEven = (num: number) => {
    return num % 2 === 0;
  };

  const freqeuncy = new Map<number, number>();
  const result: [number, number] = [-1, 0]; // [number, count]

  for (const num of nums) {
    if (!checkNumberIsEven(num)) continue;

    const count = (freqeuncy.get(num) || 0) + 1;
    freqeuncy.set(num, count);

    if (count >= result[1]) {
      result[0] = num;
      result[1] = count;
    } else if (count === result[1]) {
      result[0] = Math.min(result[0], num);
      result[1] = count;
    }
  }

  return result[0];
}
