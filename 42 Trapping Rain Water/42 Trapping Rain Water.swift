class Solution {
  func trap(_ height: [Int]) -> Int {
    let n: Int = height.count
    var currentMax: Int = 0
    var leftMaxs: [Int] = Array(repeating: 0, count: n)
    var rightMaxs: [Int] = Array(repeating: 0, count: n)

    for i in 0..<height.count {
      currentMax = max(currentMax, height[i])
      leftMaxs[i] = currentMax
    }

    currentMax = 0

    for i in stride(from: height.count - 1, through: 0, by: -1) {
      currentMax = max(currentMax, height[i])
      rightMaxs[i] = currentMax
    }

    return height.enumerated().reduce(0, {accumulator, element in 
      accumulator + max(0, min(leftMaxs[element.0], rightMaxs[element.0]) - element.1)
    })
  }
}