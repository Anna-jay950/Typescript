interface UserInterface {
  id: number;
  name: string;
  age?: number;
  greet(message: string): void;
}

const User: UserInterface = {
id: 35435,
name: "Pedro",

greet(message) {
  console.log(message);
},
};

User.greet("Hello")
console.log(User.name)