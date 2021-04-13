//Instructions
//Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

const anagramCounter = (wordsArray) => {
    let counter = 0
 for (let i = 0; i<wordsArray.length; i++){
   for (let k= i + 1; k<wordsArray.length; k++){
     if(wordsArray[i].split('').sort().join('').trim() === wordsArray[k].split('').sort().join('').trim()) {
       counter++
     }
   }
 }  
   return counter;
 }