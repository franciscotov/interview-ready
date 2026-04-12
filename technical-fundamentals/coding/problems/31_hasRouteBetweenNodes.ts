// 1. *Route Between Nodes*:

// Given a directed graph, design an algorithm to find out whether there is a route
// between two nodes.

export type GraphNode = {
  value: number;
  neighbors: GraphNode[];
};

export default function hasRouteBetweenNodes(
  start: GraphNode,
  end: GraphNode,
): boolean {
  /*
            Graph:
            1 -> 2 -> 3 -> 4
            |         |
            5         6
        */
  const queue: GraphNode[] = start.neighbors;
  let p;
  let set = new Set<GraphNode>();
  while(p = queue.shift()) {
    if(set.has(p)) return false;
    set.add(p);
    if(p === end) {
      return true;
    }
    if(p.neighbors.length > 0) {
      queue.push(...p.neighbors);
    }
  }
  return false;
}
