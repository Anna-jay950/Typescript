"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 3. Use the Generic template for a Product API response
const productResponse = {
    status: "success",
    message: "Product fetched successfully",
    data: {
        productId: 1024,
        price: 450 // TypeScript knows this must be a number because of ProductData
    }
};
// 4. Use the EXACT SAME interface template for a Profile API response
const profileResponse = {
    status: "success",
    message: "Profile updated",
    data: {
        email: "kwame@email.com",
        theme: "dark" // TypeScript provides autocomplete for "dark" | "light" here
    }
};
//# sourceMappingURL=generics.js.map