let string = "I am learning JavaScript"
let count =0
for (let a of string)
{   
    if(a.toLowerCase()==='i'){
    count = count + 1
    console.log(a)
    }
}
console.log(count)

let str = "I am learning JavaScript";

// remove spaces
str = str.replace(/\s+/, "");

console.log(str)
chars = str.split(' ')
for(let chars=0; )