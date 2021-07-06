//INSTRUCTIONS

/* This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three())); */

//SOLUTION

const expression = (num, operation) => {
    if(!operation){
      return num
    } else {
      return Math.floor(operation(num))
    }
  }
  
  const zero = (operatorFunction) => {
    return expression(0, operatorFunction)
   }
  const one = (operatorFunction) => {
    return expression(1, operatorFunction)
  }
  const two = (operatorFunction) => {
    return expression(2, operatorFunction)
  }
  const three = (operatorFunction) => {
    return expression(3, operatorFunction)
  }
  const four = (operatorFunction) => {
    return expression(4, operatorFunction)
  }
  const five = (operatorFunction) => {
    return expression(5, operatorFunction)
  }
  const six = (operatorFunction) => {
    return expression(6, operatorFunction)
  }
  
  const seven = (operatorFunction) => {
    return expression(7, operatorFunction)
  }  
  const eight = (operatorFunction) => {
    return expression(8, operatorFunction)
  }
  const nine = (operatorFunction) => {
    return expression(9, operatorFunction)
  }
  
  
  
  const plus = (numberFunction) => {
     return function(y){
     return  y  + numberFunction
    } 
  }
  const minus = (numberFunction) => {
     return function(y){
     return  y  - numberFunction
    } 
  }
  
  const times = (numberFunction) => {
    return function(y){
     return  y  * numberFunction
    } 
  }
  
  const dividedBy = (numberFunction) => {
     return function(y){
      return  y  / numberFunction
    } 
  }