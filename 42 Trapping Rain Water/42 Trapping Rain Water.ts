function trap(height: number[]): number {
  const leftMaxs: number[] = Array(height.length).fill(0);
  const rightMaxs: number[] = Array(height.length).fill(0);
  let max: number = 0;
  let result: number = 0;

  for (let i = 0; i < height.length; i++) {
    max = Math.max(max, height[i]);
    leftMaxs[i] = max;
  }

  max = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    max = Math.max(max, height[i]);
    rightMaxs[i] = max;
  }

  for (let i = 0; i < height.length; i++) {
    result =
      result + Math.max(0, Math.min(leftMaxs[i], rightMaxs[i]) - height[i]);
  }

  return result;
}
