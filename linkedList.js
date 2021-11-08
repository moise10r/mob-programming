class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}


class LinkedList {
  constructor(value){
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.size = 1;
  }

  push(value){
    const newNode = new Node(value);
    if(!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  pop(){
    if(!this.head)return undefined;
    if(this.size === 0) return undefined;
    if(this.size === 1){
      this.head = null;
      this.tail = null;
      this.size--;
      return this;
    }
    let current = this.head;
    let previous = this.head;
    while(current.next) {
      previous = current;
      current = current.next;
    }  
    this.tail = previous;
    this.tail.next = null;
    this.size--;
  }

  unshift(value){
    const newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.size++;
  }

  shift(){
    if(!this.head)return undefined;
    if(this.size === 0) return undefined;
    if(this.size === 1){
      this.head = null;
      this.tail = null;
      this.size--;
      return this;
    }
    const current = this.head;
    this.head = this.head.next;
    current.next = null;
    this.size--;
  }

  get(index) {
    if(index < 0 || index >= this.size) return undefined;
    if(index === 0) return this.head;
    let current = this.head;
    for(let i= 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  set(index, value) {
    if(index < 0 || index >= this.size) return undefined;
    const current = this.get(index);
    current.value = value;
    return this;
  }
}

const newLinkedList = new LinkedList(1);
newLinkedList.push(2);
newLinkedList.push(3);
newLinkedList.push(4);
newLinkedList.set(0,4);
console.log( newLinkedList);