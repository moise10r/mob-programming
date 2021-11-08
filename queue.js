class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value){
    this.value = value;
    this.first = null;
    this.last = null;
    this.size = 1;
  }

  enqueue(value){
    let newNode = new Node(value);
    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this,size++;
    }
    return this;
  }

  dequeue(){
    if(this.size === 0) return undefined;
    if(this.size === 1){
      this.first = null;
      this.last = null;
    } else {
      let temp = this.first;
      this.first = this.first.next;
      temp.next = null;
      this.size--;
      return this;
    }
  }
}