/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function (root) {
    return sumOfSubTree(root, 0)[2];
};

const sumOfSubTree = (root, matches = 0) => {
    // 0th element as sum and 1st element as no. of nodes
    if (!root) return [0, 0, matches];
    const left = sumOfSubTree(root.left, matches);
    const right = sumOfSubTree(root.right, matches);
    const sum = root.val + left[0] + right[0];
    const cnts = 1 + left[1] + right[1];
    const avg = (sum / cnts) | 0;
    matches = matches + left[2] + right[2];
    if (root.val === avg) matches++;
    return [sum, cnts, matches];
}