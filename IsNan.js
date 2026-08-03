let x = 3.14
console.log(isNaN(x));

//let y = 'false';

//console.log(Number(y));

console.log(Number.isNaN('iuo'));
console.log('pony'/'foo');
Number.isNaN({});
// <- false, {} is not NaN
Number.isNaN('ponyfoo')
// <- false, 'ponyfoo' is not NaN
Number.isNaN(NaN)
// <- true, NaN is NaN
Number.isNaN('pony'/'foo')
// <- true, 'pony'/'foo' is NaN, NaN is NaN

isNaN({});
// <- true, {} is not a number
isNaN('ponyfoo')
// <- true, 'ponyfoo' is not a number
isNaN(NaN)
// <- true, NaN is not a number
isNaN('pony'/'foo')
// <- true, 'pony'/'foo' is NaN, NaN is  a bad number

isNaN('hello') // true, but this is misleading, cuz `hello` is not NaN
//isNaN can't distinguish NaN with other not-number values, such as characters.

//So a new method comes into play.

//Number.isNaN checks if the value is number firstly, if it is not a number, it returns false immediately.

//Number.isNaN('hello') // false, 'hello' is not NaN, this is the supposed result

//This method returns true if the value is of the type Number, and equates to NaN. Otherwise it returns false


Number.isNaN("a125") // false
Number.isNaN(+("a125")) //true