function dailyTemperatures(temperatures: number[]): number[] {
  const results: number[] = Array(temperatures.length).fill(0);
  const stacks: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stacks.length > 0 &&
      temperatures[stacks.at(-1)!] < temperatures[i]
    ) {
      const j = stacks.pop()!;
      results[j] = i - j;
    }
    stacks.push(i);
  }

  return results;
}
