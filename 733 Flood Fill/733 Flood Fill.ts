function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const originalColor = image[sr][sc];
  const rows = image.length;
  const cols = image[0].length;

  if (originalColor === color) return image;

  const bfs = (startRow: number, startCol: number): void => {
    const queue: number[][] = [[startRow, startCol]];
    const directions: number[][] = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    while (queue.length > 0) {
      const [row, col] = queue.shift()!;

      if (image[row][col] !== originalColor) continue;

      image[row][col] = color;

      for (const [dx, dy] of directions) {
        const nextRow = row + dx;
        const nextCol = col + dy;

        if (
          nextRow < 0 ||
          nextRow >= rows ||
          nextCol < 0 ||
          nextCol >= cols ||
          image[nextRow][nextCol] !== originalColor
        )
          continue;

        queue.push([nextRow, nextCol]);
      }
    }
  };

  const dfs = (startRow: number, startCol: number): void => {
    const stack: number[][] = [[startRow, startCol]];

    while (stack.length > 0) {
      const [row, col] = stack.pop()!;

      if (
        row < 0 ||
        row >= rows ||
        col < 0 ||
        col >= cols ||
        image[row][col] !== originalColor
      )
        continue;

      image[row][col] = color;

      stack.push([row + 1, col]);
      stack.push([row - 1, col]);
      stack.push([row, col + 1]);
      stack.push([row, col - 1]);
    }
  };

  const dfsRecursive = (row: number, col: number): void => {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      image[row][col] !== originalColor
    )
      return;

    image[row][col] = color;

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  };

  bfs(sr, sc);

  return image;
}
