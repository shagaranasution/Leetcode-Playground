class Solution {
  func isPalindrome(_ s: String) -> Bool {
    let characters: [Character] = Array(s)
    var left: Int = 0
    var right: Int = characters.count - 1

    while left < right {
      while left < right && !characters[left].isAlphanumeric() {
        left += 1
      }

      while left < right && !characters[right].isAlphanumeric() {
        right -= 1
      }

      guard
        characters[left].lowercased() == characters[right].lowercased()
      else {
        return false
      }

      left += 1
      right -= 1
    }

    return true
  }
}

extension Character {
  func isAlphanumeric() -> Bool {
    return self.isLetter || self.isNumber
  }
}
