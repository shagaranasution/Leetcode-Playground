class Solution {
  func isAnagram(_ s: String, _ t: String) -> Bool {
    guard s.count == t.count else { return false }

    var charCounts: [Int] = Array(repeating: 0, count: 26)

    for char in s {
      charCounts[Int(char.asciiValue! - Character("a").asciiValue!)] += 1
    }

    for char in t {
      charCounts[Int(char.asciiValue! - Character("a").asciiValue!)] -= 1
    }

    for count in charCounts {
      if count != 0 { return false }
    }

    return true
  }
}
