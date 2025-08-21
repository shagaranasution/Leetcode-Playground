// T = O(n log n)
// S = O(n)
function findKthLargest(nums: number[], k: number): number {
  return nums.sort((a, b) => b - a).at(k - 1) ?? -1;
}
