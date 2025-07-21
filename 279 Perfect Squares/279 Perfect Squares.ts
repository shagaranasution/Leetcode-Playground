function numSquares(n: number): number {
  const squares: number[] = [];

  for (let i = 0; i * i <= n; i++) {
    squares.push(i * i);
  }

  const queue: [number, number][] = [[n, 0]]; // initial [remainder, steps]
  const visited = new Set<number>();

  while (queue.length > 0) {
    const [remainder, steps] = queue.shift()!;

    if (remainder === 0) return steps;

    for (const square of squares) {
      const next = remainder - square;

      if (next < 0) break;

      if (!visited.has(next)) {
        visited.add(next);
        queue.push([next, steps + 1]);
      }
    }
  }

  return -1;
}
