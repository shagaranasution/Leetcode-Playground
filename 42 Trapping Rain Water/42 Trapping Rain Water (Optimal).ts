function trapOptimzed(height: number[]): number {
  let total: number = 0;
  let leftMax: number = height[0];
  let rightMax: number = height[height.length - 1];
  let left: number = 0;
  let right: number = height.length - 1;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      total = total + Math.max(0, leftMax - height[left]);
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      total = total + Math.max(0, rightMax - height[right]);
      right--;
    }
  }

  return total;
}
