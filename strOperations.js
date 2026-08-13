str = 'hi5a'
str_one = '1'
console.log(str+4)
console.log(str*4)
console.log(str_one-4)
console.log(str_one+4)
console.log(str_one*4)
console.log(str/2)
console.log(str%2)
console.log(`${str} 1`)

// searching and checking
phrase = 'lets do this'

console.log(phrase.indexOf('do'))
console.log(phrase.includes('do'))
console.log(phrase.startsWith('do'))
console.log(phrase.endsWith('this'))
console.log(phrase.slice(-4,-1))
console.log(phrase.substring(1,7))


const array1 = [3,7,9]
const array2 = [...array1,4]
console.log(array2)

const array3 = [...array2]
console.log(array3)


const array4 = Array.from(array1)
console.log(array4)
console.log(array1)

const copy = array2.slice()
console.log(copy)

const nestedArray = [[1], [2], [3]];
console.log(nestedArray)
const copy_shallow = Array.from(nestedArray)
console.log(copy_shallow)
console.log(nestedArray)
const deepCopy = structuredClone(nestedArray);
console.log(deepCopy)
console.log(nestedArray)


