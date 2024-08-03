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
    } else {
      this.recursive_add(this.head, value);
    }
  },

  recursive_add: function (node, value) {
    if (value < node.value) {
      let new_node = node_maker(value);
      if (node == this.head) {
        this.head = new_node;
      }
      new_node.next = node;
      node.prev = new_node;
    } else {
      if (node.next == null) {
        node.next = node_maker(value);
      } else {
        this.recursive_add(node.next, value);
      }
    }
  },

  pop: function () {
    let ret_node = this.head;
    this.head = this.head.next;
    if (this.head != null) {
      this.head.prev = null;
      ret_node.next = null;
    } else {
      this.tail = null;
      this.has_nodes = false;
    }
    return ret_node;
  },
};

fill = function (arr, list) {
  for (item in arr) {
    list.push(item);
  }
};

empty = function (list) {
  if (list.has_nodes == true) {
    let ret_ob = list.pop();
    console.log(ret_ob.value);
  }
};

let loc_list = new list();
let loc_arr = [1, 5, 8, 4, 7, 2, 0, 9];

fill(loc_arr, loc_list);
empty(loc_list);
