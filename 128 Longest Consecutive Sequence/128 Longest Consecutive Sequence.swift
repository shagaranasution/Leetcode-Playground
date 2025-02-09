class Solution {
  func longestConsecutive(_ nums: [Int]) -> Int {
    guard nums.count != 0 else {
      return 0
    }

    var longestConsecutiveCount: Int = 1
    let numsSet: Set<Int> = Set(nums)

    for num in numsSet {
      if numsSet.contains(num - 1) {
        continue
      }

      var currentLongestConsecutiveCount: Int = 1

      while numsSet.contains(num + currentLongestConsecutiveCount) {
        currentLongestConsecutiveCount += 1
      }

      longestConsecutiveCount = max(longestConsecutiveCount, currentLongestConsecutiveCount)
    }

    return longestConsecutiveCount
  }
}
