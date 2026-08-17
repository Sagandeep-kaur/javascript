
// rest operator in function
function add(a,b,...c){
    sum = a + b
    console.log(sum)
    console.log(c)
}
add(2,5,4,2,77,86)
// object destructuring
object1 = {
    name:'sagan',
    marks:56,
    color: 'brown'
}

let {name, ...otherDetails} = object1

console.log(name)
console.log(otherDetails)

//array destructuring

array = [3,5,6,7,9]

let [num1, num2, , num4] = array
console.log(num1,num2,num4)