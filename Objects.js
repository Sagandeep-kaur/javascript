// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Build a Text
let text = "";
for (let x in person) {
  text += person[x] + " ";
};

console.log(text)
// removing object properties
delete person.age

console.log(person)

//adding object property
person.age =15
console.log(person)

//Spread in Objects :
//Copying an Object :
const user = { name: "Alice", age: 25 };
const clone = { ...user };

console.log(clone); // { name: "Alice", age: 25 }

//Merging an object:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const result = { ...obj1, ...obj2 };
console.log(result);

let obj = { name: "Soav", age: 23 };
console.log(Object.keys(obj))
console.log(Object.keys(obj).length);

// finding a specific property in the object
const personn = {
    firstName: "John",
    lastName: "Doe"
  };
  
  let resultt = ("firstName" in personn);

  // nested objects

  myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
  console.log(myObj.myCars.car3)

