 // 1. Define the Enum
enum UserRole {
  Admin = "ADMIN",
  Manager = "MANAGER",
  Guest = "GUEST"
}

// 2. Use the Enum as a Type
interface AppUser {
  username: string;
  role: UserRole; // Must be one of the enum values
}

// 3. Assign an Enum Value
const currentUser: AppUser = {
  username: "kofi_dev",
  role: UserRole.Admin // Clean and autocomplete-friendly syntax
};

// 4. Checking values cleanly
function checkAccess(user: AppUser): void {
  if (user.role === UserRole.Admin) {
    console.log("Full dashboard access granted.");
  } else {
    console.log("Restricted access.");
  }
}

checkAccess(currentUser); // Outputs: "Full dashboard access granted."
