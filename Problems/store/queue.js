class Node {
  constructor(val) {
    this.val = val;
    this.head = null;
    this.next = null;
  }
}

class MyQueue {
  inqueue = (val) => {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  dequeue = () => {
    this.head = this.head.next;
  };

  print = () => {
    console.log("------------");
    let oldHead = this.head;
    while (this.head != null) {
      console.log(this.head.val);
      this.head = this.head.next;
    }
    this.head = oldHead;
  };
}

let myqu = new MyQueue();

myqu.inqueue(1);
myqu.inqueue(2);
myqu.inqueue(3);
myqu.print();

myqu.dequeue();
myqu.print();

myqu.inqueue(4);
myqu.print();
