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
var findMode = function (root) {
    let modes = [];
    let prev = root;
    let count = 0;
    let max = 0;

    function traverse(node) {
        if (node === null) return;
        traverse(node.left);
        count = prev.val === node.val ? count + 1 : 1;
        prev = node;
        if (count === max) modes.push(node.val);
        else if (count > max) {
            modes = [node.val];
            max = count;
        }
        traverse(node.right);
    }
    traverse(root);
    return modes;
};