class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}


class Stack {
  constructor(value){
    const newNode = new Node(value);
    this.top = newNode;
    this.size = 1;
  }


  push(value){
    if(this.top === null){
      this.top = new Node(value);
      this.size++;
    } else {
      const newNode = new Node(value);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }
  }

  pop(){
    if(this.top === null) return undefined;
    const currentTop = this.top;
    this.top = this.top.next;
    currentTop.next = null;
    this.size--;
  }
}