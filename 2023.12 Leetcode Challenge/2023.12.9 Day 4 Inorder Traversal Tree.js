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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let inorderTree = [];
    function helper(root) {
        if (root == null) {
            return;
        }
        if (root.left) {
            helper(root.left);
        }
        if (root) {
            inorderTree.push(root.val);
        }
        if (root.right) {
            helper(root.right);
        }
    }
    helper(root);
    return inorderTree;

};