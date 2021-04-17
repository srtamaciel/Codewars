//Intructions
//Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
//Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

const iqTest = (numbers) => {
    numbers = numbers.split(' ')
   
   let odd = numbers.filter(numb=>{
     return numb % 2 === 1
   })
   let even = numbers.filter(numb=>{
     return numb % 2 === 0
   })
    return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
   }