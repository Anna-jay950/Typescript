// 1. Create a Generic Interface using a type placeholder <T>
interface ApiResponse<T> {
  status: "success" | "error";
  message: string;
  data: T; // The type of data will be determined when used
}

// 2. Define distinct types for your application data
interface ProductData {
  productId: number;
  price: number;
}

interface ProfileData {
  email: string;
  theme: "dark" | "light";
}

// 3. Use the Generic template for a Product API response
const productResponse: ApiResponse<ProductData> = {
  status: "success",
  message: "Product fetched successfully",
  data: {
    productId: 1024,
    price: 450 // TypeScript knows this must be a number because of ProductData
  }
};

// 4. Use the EXACT SAME interface template for a Profile API response
const profileResponse: ApiResponse<ProfileData> = {
  status: "success",
  message: "Profile updated",
  data: {
    email: "kwame@email.com",
    theme: "dark" // TypeScript provides autocomplete for "dark" | "light" here
  }
};
