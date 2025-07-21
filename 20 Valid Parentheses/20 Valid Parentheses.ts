function isValid(s: string): boolean {
  const stack: string[] = [];
  const brackets = new Map<string, string>([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ]);

  for (const character of s) {
    if (brackets.has(character)) {
      stack.push(character);
    } else {
      if (character !== brackets.get(stack.pop()!)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
