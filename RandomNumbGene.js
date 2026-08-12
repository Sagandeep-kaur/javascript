
let zeroToNine = Math.floor(Math.random()*10)
let zeroToHundred = Math.floor(Math.random()*101)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // Both min and max are inclusive
    return Math.floor(Math.random() * (max - min + 1) + min) ; 
  }
  
  console.log(getRandomInt(5, 15));