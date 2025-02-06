function isValidSudoku(board: string[][]): boolean {
  const N: number = board.length;

  const rows: Set<string>[] = Array(N);
  const cols: Set<string>[] = Array(N);
  const boxes: Set<string>[] = Array(N);

  for (let i = 0; i < board.length; i++) {
    rows[i] = new Set();
    cols[i] = new Set();
    boxes[i] = new Set();
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board.length; c++) {
      const value: string = board[r][c];

      if (value === '.') continue;

      if (rows[r].has(value)) {
        return false;
      }
      rows[r].add(value);

      if (cols[c].has(value)) {
        return false;
      }
      cols[c].add(value);

      const idx: number = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      if (boxes[idx].has(value)) {
        return false;
      }
      boxes[idx].add(value);
    }
  }

  return true;
}
