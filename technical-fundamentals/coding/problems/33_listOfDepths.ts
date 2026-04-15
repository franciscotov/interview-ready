// 3. *List of Depths*:

// Given a binary tree, design an algorithm which creates a linked list
// of all the nodes at each depth (e.g., if you have a tree with depth D,
// you'll have D linked lists).

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export type ListNode<T> = {
  value: T;
  next?: ListNode<T>;
};
/*
        1
      / \
      2   3
    / \   \
   4   5   6
    /
  7
*/

export default function listOfDepths<T>(
  root: TreeNode<T> | null,
): ListNode<T>[] {
  // map the tree and all the depth nodes
  // we could track the level and
  // build the lists acording to the level
  let res: Array<ListNode<T>> = [];
  function dfs(
    node: TreeNode<T> | undefined,
    level: number,
    list: Array<ListNode<T>>,
  ) {
    if (!node) {
      return;
    }
    let currentList: ListNode<T> = { value: undefined! };
    currentList.value = node.value;
    if (list[level]) {
      let p = list[level];
      while (p.next) {
        p = p.next;
      }
      p.next = currentList;
    } else {
      list[level] = currentList;
    }
    level++;
    dfs(node.left, level, list);
    dfs(node.right, level, list);
    return;
  }
  let count = 0;
  dfs(root!, count, res);
  return res;
}
