/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//  next --> left/right
// val = val
//  temp = temp
//  head= root
/**
 * @param {TreeNode} root
 * @return {number[]}
 */


var largestValues = function (root) {
    if (!root) {
        return [];
    }

    largestNode = [];
    helper([root])
    return largestNode;

    function helper(arr) {
        let temp = [];
        let max = Number.MIN_SAFE_INTEGER

        for (node of arr) {
            max = Math.max(max, node.val);
            if (node.left) temp.push(node.left)
            if (node.right) temp.push(node.right)
        }

        largestNode.push(max);
        if (!temp.length) return
        helper([...temp])
    }
};