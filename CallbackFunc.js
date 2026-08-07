function greet(name,callback) {
    console.log(`Hello, ${name}!`)
    callback();
}

function sayGoodBye() {
    console.log('Goodbye');

}


greet('Alice',sayGoodBye)
greet('Alice',sayGoodBye())// sayGoodBye() will return undefined here
