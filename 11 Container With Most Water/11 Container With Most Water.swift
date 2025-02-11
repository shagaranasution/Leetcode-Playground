class Solution {
  func maxArea(_ height: [Int]) -> Int {
    var maxWaterAmount: Int = 0
    var left: Int = 0
    var right: Int = height.count - 1

    while left < right {
      let width: Int = right - left
      let area: Int = min(height[left], height[right]) * width
      
      maxWaterAmount = max(maxWaterAmount, area)

      if height[left] <= height[right] {
        left += 1
      } else {
        right -= 1
      }
    }

    return maxWaterAmount  
  }
}