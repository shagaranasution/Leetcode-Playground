class Solution {
  func twoSum(_ numbers: [Int], _ target: Int) -> [Int] {
    var left: Int = 0
    var right: Int = numbers.count - 1

    while left < right {
      let sum: Int = numbers[left] + numbers[right]

      if sum == target {
        return [left + 1, right + 1]
      }

      if sum < target {
        left += 1
      } else {
        right -= 1
      }
    }

    return []
  }
}
