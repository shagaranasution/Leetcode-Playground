/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 *
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 *
 */

function cloneGraph(node: _Node | null): _Node | null {
  if (!node) return null;

  const visited = new Map<_Node, _Node>();

  const dfs = (current: _Node): _Node => {
    if (visited.has(current)) {
      return visited.get(current);
    }

    const clone = new _Node(current.val);
    visited.set(current, clone);

    for (const neighbor of current.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  };

  return dfs(node);
}
