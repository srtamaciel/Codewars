//Instructions
//Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.

const whatTimeIsIt = (angle) => {
    // Your code here
    let minsByAngle = angle*2
    
    let hours = Math.floor(minsByAngle / 60)
    let minutes = Math.floor (minsByAngle % 60)
    
    if(hours == 0) {
      hours = '12'
    }
    if(hours < 10) {
      hours = `${0}${hours}`
    }
    if(minutes < 10) {
     minutes = `${0}${minutes}`
    }
  return `${hours}:${minutes}`
    
  }