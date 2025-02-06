class Solution {
  func topKFrequent(_ nums: [Int], _ k: Int) -> [Int] {
    let numsMap: [Int: Int] = nums.reduce(into: [:]) { map, num in map[num, default: 0] += 1 }

    return numsMap.sorted { $0.value > $1.value }.prefix(k).map { $0.key }
  }
}
