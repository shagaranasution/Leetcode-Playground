class Solution {
  func groupAnagrams(_ strs: [String]) -> [[String]] {
    var map: [String: [String]] = [:]

    for str in strs {
      map[String(str.sorted()), default: []].append(str)
    }

    return Array(map.values)
  }
}
