function evalRPN(tokens: string[]): number {
  const stacks: number[] = [];

  const countTwoNumbers = (
    left: number,
    right: number,
    operation: string
  ): number => {
    if (operation === '+') {
      return left + right;
    } else if (operation === '-') {
      return left - right;
    } else if (operation === '*') {
      return Math.trunc(left * right);
    }

    return Math.trunc(left / right);
  };

  for (const token of tokens) {
    const number = parseInt(token);

    if (number === 0 || number) {
      stacks.push(number);
    } else {
      const right = stacks.pop()!;
      const left = stacks.pop()!;

      stacks.push(countTwoNumbers(left, right, token));
    }
  }

  return stacks.at(-1)!;
}
