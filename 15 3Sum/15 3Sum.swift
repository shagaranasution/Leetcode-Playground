class Solution {
  func threeSum(_ nums: [Int]) -> [[Int]] {
    var results: [[Int]] = []
    let numsSorted: [Int] = nums.sorted()

    for i in 0..<numsSorted.count {
      if i == 0 || numsSorted[i] != numsSorted[i - 1] {
        var left: Int = i + 1
        var right: Int = numsSorted.count - 1

        while left < right {
          let sum: Int = numsSorted[i] + numsSorted[left] + numsSorted[right]

          if sum == 0 {
            results.append([
              numsSorted[i],
              numsSorted[left],
              numsSorted[right],
            ])

            left += 1
            right -= 1

            while left < right && numsSorted[left] == numsSorted[left - 1] {
              left += 1
            }
          } else if sum < 0 {
            left += 1
          } else {
            right -= 1
          }
        }
      }
    }

    return results
  }
}
