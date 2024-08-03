node_maker = function (value) {
  let node = {
    value: value,
    left: null,
    right: null,
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
};
