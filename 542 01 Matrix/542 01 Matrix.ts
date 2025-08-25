function updateMatrix(mat: number[][]): number[][] {
  const rows: number = mat.length;
  const cols: number = mat[0].length;
  const queue: [number, number][] = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 0) {
        queue.push([r, c]);
      } else {
        mat[r][c] = Infinity;
      }
    }
  }

  const directions: number[][] = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length > 0) {
    const [r, c] = queue.shift()!;

    for (const [dx, dy] of directions) {
      const nr = r + dx;
      const nc = c + dy;

      if (nr >= 0 && nc >= 0 && nr < rows && nc < cols) {
        if (mat[nr][nc] > mat[r][c] + 1) {
          mat[nr][nc] = mat[r][c] + 1;
          queue.push([nr, nc]);
        }
      }
    }
  }

  return mat;
}
