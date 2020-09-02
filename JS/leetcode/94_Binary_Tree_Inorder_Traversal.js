let inOrderTraversal = (root) => {
    /*
            1
        2       3
    4   5       
    Expected : 4, 2, 5, 1, 3 
    */
    let result = [];
    let stack = [];
    
    while (root || stack.length) {

        if (root) {
            // We want to keep adding to stack if the left node is valid
            stack.push(root);
            root = root.left;
        } else {
            // We simply pop from stack and add to result and set node to the right node
            root = stack.pop();
            result.push(root.val);
            root = root.right;
        }
    }
}


exports.inOrderTraversal = inOrderTraversal;