function decodeString(s: string): string {
  const countStack: number[] = [];
  const stringStack: string[] = [];

  let currNumber: number = 0;
  let currStr: string = '';

  for (const char of s) {
    if (!isNaN(Number(char))) {
      // Number can be > 9. Example: "101[a]"
      currNumber = currNumber * 10 + Number(char);
    } else if (char === '[') {
      // Push current context to stack
      countStack.push(currNumber);
      stringStack.push(currStr);

      // Reset for new context
      currNumber = 0;
      currStr = '';
    } else if (char === ']') {
      const countToRepeat = countStack.pop()!;
      const lastStr = stringStack.pop()!;

      currStr = lastStr + currStr.repeat(countToRepeat);
    } else {
      currStr += char;
    }
  }

  return currStr;
}
