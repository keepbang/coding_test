function TreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  
    TreeNode.prototype.addNode = function (val) {
      if (this.value > val) {
        if (this.left === null) {
          this.left = new TreeNode(val);
        } else {
          this.left.addNode(val);
        }
      } else if (this.value < val) {
        if (this.right === null) {
          this.right = new TreeNode(val);
        } else {
          this.right.addNode(val);
        }
      }
    };
  
    TreeNode.prototype.getValue = function () {
      return this.value;
    };
  }
  
  function preOrder(node) {
    let result = [];
    result.push(node.value);
    if (node.left !== null) {
      result = result.concat(preOrder(node.left));
    }
    if (node.right !== null) {
      result = result.concat(preOrder(node.right));
    }
  
    return result;
  }
  
  function inOrder(node) {
    let result = [];
  
    if (node.left !== null) {
      result = result.concat(inOrder(node.left));
    }
    result.push(node.value);
    if (node.right !== null) {
      result = result.concat(inOrder(node.right));
    }
  
    return result;
  }
  
  function postOrder(node) {
    let result = [];
  
    if (node.left !== null) {
      result = result.concat(postOrder(node.left));
    }
  
    if (node.right !== null) {
      result = result.concat(postOrder(node.right));
    }
  
    result.push(node.value);
  
    return result;
  }
  
  const tree = new TreeNode(10);
  
  tree.addNode(3);
  tree.addNode(6);
  tree.addNode(1);
  
  tree.addNode(12);
  tree.addNode(11);
  tree.addNode(17);
  console.log(preOrder(tree));
  console.log(inOrder(tree));
  
  console.log(postOrder(tree));
  