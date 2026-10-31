interface UserInterface {
  id: number | string; // union
  name: string;
  age?: number;
  greet(message: string): void;
}

const User: UserInterface = {
id: 35435,
name: "Pedro",

greet(message: string) {
  console.log(message);
},
};

User.greet("Hello")
console.log(User.name)


interface BusinessPartner {
  name: string;
  creditScore: number;
}

interface UnserIdentity {
  id: number;
  email: string;
}

type Employee = BusinessPartner & UnserIdentity

const signContract = (employee: Employee): void => {
  console.log(
    "Contract signed by " + employee.name + "with email: " + employee.email
  );
};

signContract ({
  name: "Pedro",
  creditScore: 678,
  id: 34,
  email: "wji@opruojl.com"
});