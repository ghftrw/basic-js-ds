const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    return this.rootNode || null;
  }

  add(data, node = this.rootNode) {
    if (!node) {
      this.rootNode = { data };
      return this.rootNode;
    }

    if (data < node.data) {
      if (node.smaller)
        return this.add(data, node.smaller);
      else
        return node.smaller = { data }
    } else {
      if (node.greater)
        return this.add(data, node.greater);
      else
        return node.greater = { data };
    }
  }

  has(data) {
    return !!this.find(data, this.rootNode)
  }

  find(data, node = this.rootNode) {
    if (!node)
      return null;
    if (data === node.data)
      return node;
    else if ((data < node.data || data < node.removedData) && node.smaller)
      return this.find(data, node.smaller);
    else if (node.greater)
      return this.find(data, node.greater);
    else
      return null;
  }

  remove(data) {
    const node = this.find(data, this.rootNode);
    if (!node)
      return;
    node.removedData = node.data;
    node.data = null;
  }

  min(node = this.rootNode) {
    if (node && node.smaller)
      return this.min(node.smaller);
    else if (node && node.data)
      return node.data
    else
      return null;
  }

  max(node = this.rootNode) {
    if (node && node.greater)
      return this.max(node.greater);
    else if (node && node.data)
      return node.data
    else
      return null;
  }
}

module.exports = {
  BinarySearchTree
};