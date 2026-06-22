// ============================================
// TOPIC 1: Pure Functions – 10 Practice Tasks
// ============================================

// 1. Pure function multiply(a, b) that returns the product of two numbers
const multiply = (a, b) => a * b;
console.log("1. multiply(5, 3):", multiply(5, 3)); // 15

// 2. Pure function getFullName(firstName, lastName)
const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
console.log("2. getFullName('John', 'Doe'):", getFullName("John", "Doe")); // John Doe

// 3. Pure function isEven(num)
const isEven = (num) => num % 2 === 0;
console.log("3. isEven(4):", isEven(4)); // true
console.log("   isEven(5):", isEven(5)); // false

// 4. Pure function capitalize(str)
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
console.log("4. capitalize('hello'):", capitalize("hello")); // Hello

// 5. Pure function calculateArea(radius)
const calculateArea = (radius) => 3.14 * radius * radius;
console.log("5. calculateArea(5):", calculateArea(5)); // 78.5

// 6. Pure function getInitials(firstName, lastName)
const getInitials = (firstName, lastName) => 
  firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase() + ".";
console.log("6. getInitials('Dipak', 'Shrestha'):", getInitials("Dipak", "Shrestha")); // D.S.

// 7. Pure function fahrenheitToCelsius(f)
const fahrenheitToCelsius = (f) => ((f - 32) * 5) / 9;
console.log("7. fahrenheitToCelsius(32):", fahrenheitToCelsius(32)); // 0
console.log("   fahrenheitToCelsius(212):", fahrenheitToCelsius(212)); // 100

// 8. Pure function reverseString(str)
const reverseString = (str) => str.split("").reverse().join("");
console.log("8. reverseString('hello'):", reverseString("hello")); // olleh

// 9. Pure function findMax(arr)
const findMax = (arr) => Math.max(...arr);
console.log("9. findMax([10, 25, 5, 30, 15]):", findMax([10, 25, 5, 30, 15])); // 30

// 10. Pure function formatDate(year, month, day)
const formatDate = (year, month, day) => 
  `${String(day).padStart(2, "0")}/${String(month).padStart(2, "0")}/${year}`;
console.log("10. formatDate(2024, 5, 8):", formatDate(2024, 5, 8)); // 08/05/2024

// ============================================
// TOPIC 2: Arrays & Objects – 10 Practice Tasks
// ============================================

console.log("\n--- ARRAYS & OBJECTS ---\n");

// 1. Create an array colors and log the third element
const colors = ["red", "blue", "green", "yellow", "purple"];
console.log("1. colors[2]:", colors[2]); // green

// 2. Create an object book
const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
  publishedYear: 1925
};
console.log("2. book:", book);

// 3. Add a new property isRead immutably
const updatedBook = { ...book, isRead: true };
console.log("3. updatedBook with isRead:", updatedBook);
console.log("   Original book unchanged:", book);

// 4. Create an array of 3 objects representing students
const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" }
];
console.log("4. students:", students);

// 5. Create a nested object company
const company = {
  name: "Tech Corp",
  location: "San Francisco",
  employees: ["Alice", "Bob", "Charlie", "Diana"]
};
console.log("5. company:", company);

// 6. Increase each value in array by 5 immutably
const numbers = [10, 20, 30];
const increasedNumbers = numbers.map(num => num + 5);
console.log("6. Original numbers:", numbers);
console.log("   Increased numbers:", increasedNumbers); // [15, 25, 35]

// 7. Create an object car and add color property immutably
const car = { brand: "Toyota", model: "Camry", year: 2022 };
const carWithColor = { ...car, color: "Blue" };
console.log("7. car with color:", carWithColor);

// 8. Create a shopping list and add item at beginning immutably
const shoppingList = ["Milk", "Eggs", "Bread"];
const newShoppingList = ["Butter", ...shoppingList];
console.log("8. shoppingList with item at beginning:", newShoppingList); // [Butter, Milk, Eggs, Bread]

// 9. Create an object profile with nested address
const profile = {
  name: "John Doe",
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA"
  }
};
console.log("9. profile:", profile);

// 10. Create new array with only name and price from products
const products = [
  { id: 1, name: "Laptop", price: 1000, brand: "Dell" },
  { id: 2, name: "Mouse", price: 25, brand: "Logitech" },
  { id: 3, name: "Keyboard", price: 80, brand: "Corsair" }
];
const productNames = products.map(({ name, price }) => ({ name, price }));
console.log("10. products (name & price only):", productNames);
