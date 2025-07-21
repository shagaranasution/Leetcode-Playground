class MyCircularQueue {
  #queue: number[];
  #head: number = -1;
  #tail: number = -1;
  #size: number;

  constructor(k: number) {
    this.#queue = new Array(k);
    this.#size = k;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;

    if (this.isEmpty()) {
      this.#head = 0;
    }

    this.#tail = (this.#tail + 1) % this.#size;
    this.#queue[this.#tail] = value;

    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;

    if (this.#head === this.#tail) {
      this.#head = -1;
      this.#tail = -1;
    } else {
      this.#head = (this.#head + 1) % this.#size;
    }

    return true;
  }

  Front(): number {
    if (this.isEmpty()) return -1;

    return this.#queue[this.#head];
  }

  Rear(): number {
    if (this.isEmpty()) return -1;

    return this.#queue[this.#tail];
  }

  isEmpty(): boolean {
    return this.#head === -1;
  }

  isFull(): boolean {
    return (this.#tail + 1) % this.#size === this.#head;
  }
}
