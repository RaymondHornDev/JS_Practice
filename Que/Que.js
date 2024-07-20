/* My firt stab at a que in JS */

function node_maker(value) {
  let node = {
    value: value,
    next: null,
    prev: null,
  };
}

let que = {
  head: null,
  tail: null,
  size: 0,

  push: function (value) {
    if (this.head == null) {
      this.head = node_maker(value);
      this.tail = this.head;
      size++;
    } else {
      let node = this.head;
      this.head = node_maker(value);
      this.head.prev = node;
      node.next = this.head;
      size++;
    }
  },

  pop: function () {
    if (this.tail != null) {
      let node = this.tail;
      this.tail = node.prev;
      if (this.tail == null) {
        this.head = null;
      } else {
        this.tail.next = null;
        node.prev = null;
      }
      size--;
      return node;
    }
  },
};
