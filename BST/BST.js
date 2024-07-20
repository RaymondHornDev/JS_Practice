/* First stab at a binary tree in JS */

function node_maker(value) {
  let node = {
    value: value,
    left: null,
    right: null,
  };
  return node;
}

let tree = {
  root: null,

  insert: function (value) {
    if (this.root == null) {
      this.root = node_maker(value);
    } else {
      this.recursive_add(this.root, value);
    }
  },

  recursive_add: function (node, value) {
    if (node.value > value) {
      if (node.left == null) {
        node.left = node_maker(value);
      } else {
        this.recursive_add(node.left, value);
      }
    } else {
      if (node.right == null) {
        node.right = node_maker(value);
      } else {
        this.recursive_add(node.right, value);
      }
    }
  },

  inorder: function (node) {
    if (node.left != null) {
      this.inorder(node.left);
    }
    console.log(node.value);
    if (node.right != null) {
      this.inorder(node.right);
    }
  },
};

function Fill(list, value, passed_tree) {
  if (value < list.length) {
    passed_tree.insert(list[value]);
    Fill(list, value + 1, passed_tree);
  }
}

let my_arr = [0, 1, 2, 3, 4, 5, 6];

Fill(my_arr, 0, tree);

tree.inorder(tree.root);
