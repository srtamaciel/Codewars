//Intructions
//Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
    findSmallestInt(args) {
      const min = args.reduce((acc, num) => Math.min(acc, num))
      return min
    }
  }