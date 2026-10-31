"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Define the Enum
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Manager"] = "MANAGER";
    UserRole["Guest"] = "GUEST";
})(UserRole || (UserRole = {}));
// 3. Assign an Enum Value
const currentUser = {
    username: "kofi_dev",
    role: UserRole.Admin // Clean and autocomplete-friendly syntax
};
// 4. Checking values cleanly
function checkAccess(user) {
    if (user.role === UserRole.Admin) {
        console.log("Full dashboard access granted.");
    }
    else {
        console.log("Restricted access.");
    }
}
checkAccess(currentUser); // Outputs: "Full dashboard access granted."
//# sourceMappingURL=enums.js.map