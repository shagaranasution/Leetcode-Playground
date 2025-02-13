class Solution {
  func lengthOfLongestSubstring(_ s: String) -> Int {
    var maxLength: Int = 0
    var startIndex: Int = 0
    var charsMap: [Character:Int] = [:]

    for (i, char) in s.enumerated() {
      if let index = charsMap[char] {
        startIndex = max(startIndex, index + 1)
      }

      charsMap[char] = i
      maxLength = max(maxLength, i - startIndex + 1)
    }

    return maxLength
  }
}