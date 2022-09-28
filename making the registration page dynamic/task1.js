class Stack {
  
    // Array is used to implement stack
    constructor()
    {
        this.items = [];
    }

    push(element){
        this.items.push(element)
    }
    
    // Functions to be implemented
    // push(item)
    // pop()
    // peek()
    // isEmpty()
    // printStack()


    pop()
{
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
}

peek()
{
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
}
isEmpty()
{
    // return true if stack is empty
    return this.items.length == 0;
}
printStack()
{
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
}

}


var stack=new Stack();
var k=new Stack();

console.log(stack.isEmpty()); 
  
// returns Underflow
console.log(stack.pop()); 


stack.push(10);
stack.push(40);
stack.push(34)



stack.push(20);
stack.push(30);
  
// Printing the stack element
// prints [10, 20, 30]
console.log(stack.printStack());
  
// returns 30
console.log(stack.peek());
  
// returns 30 and remove it from stack
console.log(stack.pop());
  
// returns [10, 20]
console.log(stack.printStack()); 


let j=stack.pop();
k.push(j)
console.log(k.peek())
