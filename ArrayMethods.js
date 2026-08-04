let a = ["HAMA", "CSIS", "JUSTIN"];
console.log("Original Array: " + a);



let lst = a.pop();
console.log("After Removing the last: " + a);

let fst = a.shift();
console.log("After Removing the First: " + a);


a.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + a);

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAge);

function checkAge(age) {
  return age >= 18;
}


if (ages.includes(16)) {
  console.log("16 is present");
}


console.log(String(a));
console.log(typeof a);

let str = "Min, Poer, Souel";

let str_one = ' hello here you '

console.log(str.concat(str_one))
let partt = str_one.trimStart();
console.log(partt)
console.log(partt.charAt(15)); 

let part = str.substr(6, 5);
console.log(part);


part = str.replace("Poer", "Spacy");

let b = str.slice(0, 7);
console.log(b);
console.log(part);

let text = "";



const fruits = ["apple", "orange", "cherry"];
fruits.forEach(function(item) {
    if (item === "orange") {
        console.log(item);
    }
});

const x = fruits.find(item => item === "orange");

console.log(x);
