
//  Curried function (takes one argument at a time)
function curriedMultiply(a) {
  return function(b) {
    return a * b;
  };
}
console.log(curriedMultiply(2)(5)); 


//using arrow function

const  curriedMultip = a=> b=> a*b;

console.log(curriedMultip(5)(8))
