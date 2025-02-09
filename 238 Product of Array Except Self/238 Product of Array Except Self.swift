class Solution {
  func productExceptSelf(_ nums: [Int]) -> [Int] {
    var result: [Int] = Array(repeating: 1, count: nums.count)
    var pre: Int = 1
    var post: Int = 1

    for i in 0..<nums.count {
      result[i] = pre
      pre *= nums[i]
    }

    for i in stride(from: nums.count - 1, through: 0, by: -1) {
      result[i] *= post
      post *= nums[i]
    }

    return result
  }
}
