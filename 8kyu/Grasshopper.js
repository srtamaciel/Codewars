//Instructions
//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//Use conditionals to return the proper message

const greet = (name, owner) => {
    // Add code here
    if(name === owner) {
     return 'Hello boss'
    } else {
      return 'Hello guest'
    }
  }