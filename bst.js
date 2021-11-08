class Node {
	constructor(value) {
		this.value = value;
		this.right = null;
		this.left = null;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);
		if (!this.root) {
			this.root = newNode;
		}
		let current = this.root;
		if (current.value === newNode.value) return undefined;
		else {
			while (true) {
				if (current.value < newNode.value) {
					if (!current.left) {
						current.left = newNode;
						return this;
					}
					current = current.left;
				} else {
					if (!current.right) {
						current.right = newNode;
						return this;
					}
					current = current.right;
				}
			}
		}
	}

	contains(value) {
		if (this.root === null) return false;
		const current = this.root;
		while (current) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			} else {
				return true;
			}
		}
		return false;
	}
}
