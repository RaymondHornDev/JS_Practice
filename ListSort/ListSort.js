/* First stab at a sort list in javascript */

node_maker = function (value) {
  let node = {
    value: value,
    next: null,
    prev: null,
  };
  return node;
};

let list = {
  head: null,
  tail: null,
  has_nodes: false,

  push: function (value) {
    if (this.has_nodes == false) {
      this.head = node_maker(value);
      this.tail = this.head;
      this.has_nodes = true;
    }
  },

  recursive_add: function (node, value) {
    if (value < node.value) {
    }
  },
};
