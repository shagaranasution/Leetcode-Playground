class Solution {
  func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
    var numsDict: [Int: Int] = [:]

    for i in 0..<nums.count {
      if let found = numsDict[target - nums[i]] {
        return [found, i]
      }

      numsDict[nums[i]] = i
    }

    return []
  }
}
