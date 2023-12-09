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
 * @return {string}
 */
var tree2str = function (root) {

    let s = '';
    const dfs = function (node) {
        if (!node) return;
        s += node.val;
        if (!(node.left || node.right)) return;
        s += '(';
        dfs(node.left)
        s += ')';
        if (node.right) {
            s += '(';
            dfs(node.right);
            s += ')';
        };


    }
    dfs(root);

    return s;
};