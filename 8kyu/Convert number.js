//Instructions
//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

const digitize=(n)=> {
    //code here
    return n.toString().split('').reverse().map(Number)
  }