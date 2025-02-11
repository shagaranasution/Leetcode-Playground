function maxArea(height: number[]): number {
  let max: number = 0;
  let left: number = 0;
  let right: number = height.length - 1;

  while (left < right) {
    const area: number = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}
