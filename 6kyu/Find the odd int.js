//Intructions
//Given an array of integers, find the one that appears an odd number of times.
//There will always be only one integer that appears an odd number of times.

const findOdd = (array) => {
    let count = 0;
    for(let i=0; i<array.length; i++){
      for(let j=0; j<array.length; j++){
        if(array[i] === array[j]){
          count++
        }
      }
      if (count % 2 !== 0){
        return array[i]
      }
    }
   count = 0
  }