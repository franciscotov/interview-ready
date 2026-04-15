// 2. *Minimal Tree*:

// Given a sorted (increasing order) array with unique integer elements,
// write an algorithm to create a binary search tree with minimal height.
//
// A binary search tree is a search where for each node,
// lesser elements are on the left node, and greater elements on the right node.
//
// Input: [1,2,3,4,5,6,7,8]
// Output:
//      5
//   2  |  7
// 1   3|6   8
//
//

export type TreeNode<T> = {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
};

export default function minimalTree<T>(
  sortedArray: T[],
): TreeNode<T> | undefined {
  let isEven: boolean = sortedArray.length % 2 === 0;
  let pivot: number =
    Math.floor((sortedArray.length - 1) / 2) + (isEven ? 1 : 0);
  if (sortedArray.length === 0) return undefined;
  let tree: TreeNode<T> = {
    value: sortedArray[pivot],
  };

  if (sortedArray.length <= 3) {
    let leftVal = sortedArray[pivot - 1];
    let rightVal = sortedArray[pivot + 1];
    if (leftVal) {
      tree.left = {
        value: leftVal,
      };
    }
    if (rightVal) {
      tree.right = {
        value: rightVal,
      };
    }
    return tree;
  }
  // split the arr and recursion
  let leftArr = sortedArray.slice(0, pivot);
  let righttArr = sortedArray.slice(-pivot + (isEven ? 1 : 0));
  tree.left = minimalTree(leftArr);
  tree.right = minimalTree(righttArr);
  return tree;
}
