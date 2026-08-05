normalFunc()

function normalFunc() {
     console.log("Normal Function");


}


arrowFunc()

const arrowFunc = () => {
    return "Arrow Function"
}

//Function Declarations Hoisting


// Using var
sayHi(); // TypeError: sayHi is not a function
var sayHi = function() { console.log("Hi!"); };

// Using const
sayBye(); // ReferenceError: Cannot access 'sayBye' before initialization
const sayBye = () => { console.log("Bye!"); };


