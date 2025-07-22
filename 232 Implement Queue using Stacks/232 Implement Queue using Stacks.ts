class MyQueue {
  private stackIn: number[];
  private stackOut: number[];

  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }

  push(x: number): void {
    this.stackIn.push(x);
  }

  pop(): number {
    this.moveInToOutIfNeeded();
    return this.stackOut.pop()!;
  }

  peek(): number {
    this.moveInToOutIfNeeded();
    return this.stackOut.at(-1)!;
  }

  empty(): boolean {
    return this.stackIn.length === 0 && this.stackOut.length === 0;
  }

  private moveInToOutIfNeeded(): void {
    if (this.stackOut.length > 0) return;

    while (this.stackIn.length > 0) {
      this.stackOut.push(this.stackIn.pop()!);
    }
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
