
// if else
hour = 2
if (hour < 18) {
  console.log('greeting is: Good day');
} else {
  console.log('greeting is : Good evening');
}
// if , else if
a = 8
if(a==6){
  console.log('number is:' + a)

}
else if(a==7){
  console.log('number is :'+ a)
}
else {
  console.log('number is :'+ a)
}

// using ternary operator
let text = (hour<18) ? 'Good Day' : 'Good Evening'

console.log(text)

// using switch
const ay =91
switch(ay) {
    case 4:
        console.log('ay is', ay)
    
      break;
    case 9:
        console.log('ay is', ay)
      break;
    default:
        console.log('value didnt match any:',ay)
      
  }
// using logical operators
let x = (5 == 8);
let y = !(5 == 8)
console.log(x,y)

