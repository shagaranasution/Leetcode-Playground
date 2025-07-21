function numIslands(grid: string[][]): number {
  let islands: number = 0;
  const rows: number = grid.length;
  const cols: number = grid[0].length;

  const bfs = (row: number, col: number) => {
    const queue: [number, number][] = [[row, col]];
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    while (queue.length > 0) {
      const [currentRow, currentCol] = queue.shift()!;

      for (const [dx, dy] of directions) {
        const nextRow = currentRow + dx;
        const nextCol = currentCol + dy;

        if (
          nextRow < 0 ||
          nextCol < 0 ||
          nextRow >= rows ||
          nextCol >= cols ||
          grid[nextRow][nextCol] !== '1'
        ) {
          continue;
        }

        queue.push([nextRow, nextCol]);
        grid[nextRow][nextCol] = '0';
      }
    }
  };

  const dfs = (row: number, col: number) => {
    const stack: [number, number][] = [[row, col]];

    while (stack.length > 0) {
      const [nextRow, nextCol] = stack.pop()!;

      if (
        nextRow < 0 ||
        nextCol < 0 ||
        nextRow >= rows ||
        nextCol >= cols ||
        grid[nextRow][nextCol] !== '1'
      ) {
        continue;
      }

      grid[nextRow][nextCol] = '0';

      stack.push([nextRow + 1, nextCol]);
      stack.push([nextRow - 1, nextCol]);
      stack.push([nextRow, nextCol + 1]);
      stack.push([nextRow, nextCol - 1]);
    }
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        islands++;
        dfs(r, c);
      }
    }
  }

  return islands;
}
