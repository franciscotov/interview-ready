// 4. *Check Balanced*:

// Implement a function to check if a binary tree is balanced.
// For the purposes of this question, a balanced tree is defined to be a tree
// such that the heights of the two subtrees of any node never differ by more than one.

export type TreeNode<T> = {
    value: T;
    left?: TreeNode<T>;
    right?: TreeNode<T>;
};

export default function checkBalanced<T>(tree?: TreeNode<T> | null): boolean {
    // without taking care of heights, just watching if the tree is 'balanced'
    // if (!tree) return true;
    // if(!tree.left && !tree.right){
    //   return true;
    // } else if(!tree.left || !tree.right) {
    //     return false;
    // } else if(tree.left) {
    //     return checkBalanced(tree.left);
    // } else if (tree.right){
    //   return checkBalanced(tree.right);
    // }
    // return false;

    // taking care of height
    // we need to calsulate the heights and then check if the node are balanced
    if(!tree) {
        return true;
    }
    const isBalanced = checkBalanced(tree.left) && checkBalanced(tree.right);
    // we could memo the height calculation
    const mapHeight = new Map<TreeNode<T>, number>();
    const maxHeight = Math.abs(height(tree.left)- height(tree.right));

    function height(node: TreeNode<T> | undefined): number {
        if (!node) return 0;
        if(mapHeight.has(node)) return mapHeight.get(node)!
        let val = Math.max(height(node.left) + 1, height(node.right) + 1);
        mapHeight.set(node, val);
        return val;
    }
    return maxHeight <= 1 && isBalanced;
}
