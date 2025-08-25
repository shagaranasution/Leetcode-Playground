function canVisitAllRoomsBFS(rooms: number[][]): boolean {
  const visited = new Set<number>();
  const queue: number[] = [0];

  while (queue.length > 0) {
    const room = queue.shift()!;

    if (visited.has(room)) continue;
    visited.add(room);

    for (const key of rooms[room]) {
      if (visited.has(key)) continue;
      queue.push(key);
    }
  }

  return visited.size === rooms.length;
}
