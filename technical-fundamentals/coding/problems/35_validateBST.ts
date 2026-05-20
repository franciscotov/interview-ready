// 5. *Validate BST*:

// Implement a function to check if a binary tree is a binary search tree.

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export default function validateBST<T>(
  node: TreeNode<T> | undefined
): boolean {
  /*
  Invalid BST:
           7
          / \
        4    8
       / \
      3   
     / \
    2   5
  */
  if (!node) {
    return true;
  }
  // const stack = new Array<TreeNode<T>>();
  // let pre: TreeNode<T> | undefined = undefined;
  // while (node || !(stack.length === 0)) {
  //   while (node) {
  //     stack.push(node);
  //     node = node.left;
  //   }
  //   node = stack.pop();
  //   if (pre && node && node.value <= pre.value) return false;
  //   pre = node;
  //   node = node?.right;
  // }
  // return true;
  // return recursive(node, undefined);
  return recursive(node, []);
}

// recursive solution
function recursive<T>(root: TreeNode<T> | undefined, results: Array<T>): boolean {
  if(!root){
    return true;
  }
  let isBSTleft = recursive(root.left, results);
  let prev = results.pop();
  if(prev != null && root.value <= prev){
    results.push(root.value);
    return false;
  }
  results.push(root.value);
  let isBSTright = recursive(root.right, results);
  return isBSTleft && isBSTright;
}