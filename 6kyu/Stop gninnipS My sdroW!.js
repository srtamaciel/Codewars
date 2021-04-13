//Intructions
//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

const spinWords = (str) => {

    let strToArr = str.split(' ')
    let result = '';
    strToArr.map((word, i) =>{
      if(word.length >= 5){
        strToArr[i] = word.split('').reverse().join('')
      } else {
        strToArr[i] = word
      }
      result = strToArr.join(' ')
    })
   return result
  }