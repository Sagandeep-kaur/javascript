function createUser(name, role) {
  return {
    name,
    role,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am a ${this.role}.`);
    }
  };
}

// Manufacturing instances
const user1 = createUser('Alice', 'Admin');
const user2 = createUser('Bob', 'Developer');

user1.greet();