class Node {
    constructor(value, left, right) {
      this.head = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    /* BST insert this function will recursively call itself
       first the root is null and primitive after that, the new Node reference will be 
       pass to the this.node and it will take the referenc as the current node while iterating
    */
    constructor() {
      this.node = null
    }
    insertRoot(value, current_node) {
      var current_node = current_node ? current_node:this.node;
      if(current_node === null){
        this.node = new Node(value);
      }else{
        if(current_node.head > value){
          if(current_node.left === null){
            current_node.left = new Node(value);
            return;
          }else{
            this.insertRoot(value, current_node.left);
          }
        }else{
          if(current_node.right === null){
            current_node.right = new Node(value);
            return;
          }else{
            this.insertRoot(value, current_node.right);
          }
        }
      }
    }
  }
  
  const t = new BinaryTree()
  t.insertRoot(10)
  t.insertRoot(9)
  t.insertRoot(8)
  console.log(t.node)