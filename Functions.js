function greet(name= 'Geet'){
    console.log('hello'+ name)

}

greet('sagan')

greet()

function add(a, b) {
    return a + b; 
  }
  
  let result = add(5, 10);
  console.log(result);

  const addd = function(a,b){
    return a + b
  }
  console.log(addd(5,8))
// arrow function
  const sum = (a,b) => a+b;
  console.log(sum(3,6)) 


  const person = {
    name: "John",
    greet: () => {
      return this.name;
    }
  };

  console.log(person.greet())
  const personn = {
    name: "John",
    greet: function()  {
      return this.name;
    }
  };

  console.log(personn.greet())
