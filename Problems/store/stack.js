class Node {
    constructor(val) {
      this.val = val;
      this.last = null;
    }
  }
  
  class Stack {
    push = (val) => {
        let newNode =new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
    };
  
    pop = () => {
    };
  
    print = () => {
        let temp = this.first();
        while(temp){
            console.log(temp.val);
            temp = this.next;
        }
    };
  }
  

  let stack = new Stack();

  stack.push(1)

  stack.push(2)

  stack.push(3)

  stack.print();