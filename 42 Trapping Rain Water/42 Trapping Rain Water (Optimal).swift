class Solution {
  func trap(_ height: [Int]) -> Int {
    var total: Int = 0
    var leftMax: Int = height[0]
    var rightMax: Int = height.last!
    var left: Int = 0
    var right: Int = height.count - 1

    while left < right {
      if height[left] < height[right] {
        leftMax = max(leftMax, height[left])
        total += max(0, leftMax - height[left])
        left += 1
      } else {
        rightMax = max(rightMax, height[right])
        total += max(0, rightMax - height[right])
        right -= 1
      }
    }

    return total
  }
}