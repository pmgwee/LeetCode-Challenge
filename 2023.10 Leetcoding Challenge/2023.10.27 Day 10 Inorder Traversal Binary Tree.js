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
    let arr = [];
    function helper(root) {
        if (root == null) return 0;

        if (root.left) {
            helper(root.left)
        }
        if (root) {
            arr.push(root.val)
        }
        if (root.right) {
            helper(root.right)
        }
    }
    helper(root)
    return arr
};