//Instructions
//Write a function filterLongWords that takes a string sentence and an integer n.
//Return a list of all words that are longer than n.

const filterLongWords = (sentence, n) => {
    let answer = []
    let arrSentence = sentence.split(' ')
    arrSentence.forEach((word) => {
      if(word.length > n){
        answer.push(word)
      }
    })
   return answer  
  }