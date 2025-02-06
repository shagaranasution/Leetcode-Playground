class Solution {
  func isValidSudoku(_ board: [[Character]]) -> Bool {
    let N: Int = board.count

    var rows: [Set<Character>] = Array(repeating: Set<Character>(), count: N)
    var cols: [Set<Character>] = Array(repeating: Set<Character>(), count: N)
    var boxes: [Set<Character>] = Array(repeating: Set<Character>(), count: N)

    for r in 0..<N {
      for c in 0..<N {
        let value: Character = board[r][c]

        guard value != "." else {
          continue
        }

        if rows[r].contains(value) {
          return false
        }

        rows[r].insert(value)

        if cols[c].contains(value) {
          return false
        }

        cols[c].insert(value)

        let idx: Int = (r / 3) * 3 + c / 3

        if boxes[idx].contains(value) {
          return false
        }

        boxes[idx].insert(value)
      }
    }

    return true
  }
}
