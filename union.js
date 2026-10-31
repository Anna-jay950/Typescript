"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = {
    id: 35435,
    name: "Pedro",
    greet(message) {
        console.log(message);
    },
};
User.greet("Hello");
console.log(User.name);
const signContract = (employee) => {
    console.log("Contract signed by " + employee.name + "with email: " + employee.email);
};
signContract({
    name: "Pedro",
    creditScore: 678,
    id: 34,
    email: "wji@opruojl.com"
});
//# sourceMappingURL=union.js.map