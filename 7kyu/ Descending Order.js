//Intructions
//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

const descendingOrder = (n) => {
    const nToStr = n.toString() 
    const arrOfN = nToStr.split('')
    arrOfN.sort((a, b) => {
      return b - a
    })
    return Number(arrOfN.join(''))
    }