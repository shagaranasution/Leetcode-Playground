function openLock(deadends: string[], target: string): number {
  const initialPasscode = '0000';
  const visited = new Set<string>(deadends);

  if (visited.has(initialPasscode)) return -1;

  const queue: [string, number][] = [];
  queue.push([initialPasscode, 0]);

  while (queue.length > 0) {
    const [passcode, steps] = queue.shift()!;

    if (passcode === target) return steps;

    for (let i = 0; i < passcode.length; i++) {
      const currentDigit = parseInt(passcode[i]);
      const nextTopPasscode = (
        passcode.slice(0, i) +
        ((currentDigit + 1) % 10) +
        passcode.slice(i + 1)
      ).toString();
      const nextBotPasscode = (
        passcode.slice(0, i) +
        ((currentDigit + 9) % 10) +
        passcode.slice(i + 1)
      ).toString();

      for (const next of [nextTopPasscode, nextBotPasscode]) {
        if (visited.has(next)) continue;
        visited.add(next);
        queue.push([next, steps + 1]);
      }
    }
  }

  return -1;
}
