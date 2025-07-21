class MinStack {
  #stack: { val: number; min: number }[];

  get isEmpty() {
    return this.#stack.length === 0;
  }

  get latest() {
    return this.#stack.at(-1);
  }

  constructor() {
    this.#stack = [];
  }

  push(val: number): void {
    const min = this.isEmpty ? val : Math.min(val, this.getMin());
    this.#stack.push({ val, min });
  }

  pop(): void {
    this.#stack.pop();
  }

  top(): number {
    return this.latest?.val ?? -1;
  }

  getMin(): number {
    return this.latest?.min ?? -1;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
