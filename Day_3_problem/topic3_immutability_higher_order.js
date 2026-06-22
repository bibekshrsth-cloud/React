// ============================================
// TOPIC 4: Immutability Principles – 10 Practice Tasks
// ============================================

console.log("--- IMMUTABILITY PRINCIPLES ---\n");

// 1. Update an object's age immutably using spread operator
const person1 = { name: "Alice", age: 25, city: "NYC" };
const updatedPerson1 = { ...person1, age: 26 };
console.log("1. Update age immutably:");
console.log("   Original:", person1);
console.log("   Updated:", updatedPerson1);

// 2. Add a new hobby immutably
const person2 = { name: "Bob", hobbies: ["reading", "gaming"] };
const updatedPerson2 = { 
  ...person2, 
  hobbies: [...person2.hobbies, "painting"] 
};
console.log("2. Add hobby immutably:");
console.log("   Original:", person2);
console.log("   Updated:", updatedPerson2);

// 3. Remove the last element from an array immutably
const array1 = [10, 20, 30, 40, 50];
const removedLastArray = array1.slice(0, -1);
console.log("3. Remove last element:");
console.log("   Original:", array1);
console.log("   Updated:", removedLastArray);

// 4. Replace the second element immutably
const array2 = ["a", "b", "c", "d"];
const replacedArray = [array2[0], "B", ...array2.slice(2)];
console.log("4. Replace second element:");
console.log("   Original:", array2);
console.log("   Updated:", replacedArray);

// 5. Change nested property address.city immutably
const person3 = {
  name: "Charlie",
  address: { city: "LA", country: "USA" }
};
const updatedPerson3 = {
  ...person3,
  address: { ...person3.address, city: "San Francisco" }
};
console.log("5. Change nested property:");
console.log("   Original:", person3);
console.log("   Updated:", updatedPerson3);

// 6. Add a new key-value pair immutably
const obj1 = { id: 1, name: "Product", price: 50 };
const updatedObj1 = { ...obj1, inStock: true };
console.log("6. Add new key-value pair:");
console.log("   Original:", obj1);
console.log("   Updated:", updatedObj1);

// 7. Remove a property immutably
const obj2 = { id: 1, name: "Item", deletedAt: "2024-01-01", active: true };
const { deletedAt, ...updatedObj2 } = obj2;
console.log("7. Remove property (deletedAt):");
console.log("   Original:", obj2);
console.log("   Updated:", updatedObj2);

// 8. Merge two arrays immutably
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArrays = [...arr1, ...arr2];
console.log("8. Merge two arrays:");
console.log("   Array 1:", arr1);
console.log("   Array 2:", arr2);
console.log("   Merged:", mergedArrays);

// 9. Merge two objects immutably
const user1 = { id: 1, name: "Alice" };
const user2 = { email: "alice@example.com", role: "admin" };
const mergedObjects = { ...user1, ...user2 };
console.log("9. Merge two objects:");
console.log("   Object 1:", user1);
console.log("   Object 2:", user2);
console.log("   Merged:", mergedObjects);

// 10. Update a specific object in array immutably (by id)
const users = [
  { id: 1, name: "Alice", status: "active" },
  { id: 2, name: "Bob", status: "active" },
  { id: 3, name: "Charlie", status: "active" }
];
const updatedUsers = users.map(user =>
  user.id === 2 ? { ...user, status: "inactive" } : user
);
console.log("10. Update specific object by id:");
console.log("   Original:", users);
console.log("   Updated (id: 2):", updatedUsers);

// ============================================
// TOPIC 5: Higher-Order Functions – 10 Practice Tasks
// ============================================

console.log("\n--- HIGHER-ORDER FUNCTIONS ---\n");

// 1. Higher-order function repeat(action, times)
const repeat = (action, times) => {
  for (let i = 0; i < times; i++) {
    action();
  }
};
console.log("1. repeat - call action 3 times:");
let counter = 0;
repeat(() => counter++, 3);
console.log("   Counter after repeat:", counter); // 3

// 2. Create a function operate(arr, fn) that applies fn using map
const operate = (arr, fn) => arr.map(fn);
const nums = [1, 2, 3, 4];
const squared = operate(nums, x => x * x);
console.log("2. operate - square numbers:", squared); // [1, 4, 9, 16]

// 3. Write a function filterBy(arr, conditionFn)
const filterBy = (arr, conditionFn) => arr.filter(conditionFn);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evens = filterBy(numbers, x => x % 2 === 0);
console.log("3. filterBy - even numbers:", evens); // [2, 4, 6, 8]

// 4. Create logger(fn) that logs "before" and "after"
const logger = (fn) => {
  return (...args) => {
    console.log("   Before calling function");
    const result = fn(...args);
    console.log("   After calling function");
    return result;
  };
};
console.log("4. logger - function execution:");
const add = (a, b) => a + b;
const loggedAdd = logger(add);
const result = loggedAdd(5, 3);
console.log("   Result:", result);

// 5. Write createAdder(x) that returns a new function
const createAdder = (x) => (y) => x + y;
const addFive = createAdder(5);
console.log("5. createAdder - add 5 to 10:", addFive(10)); // 15

// 6. Create sortBy(arr, key) that sorts array of objects
const sortBy = (arr, key) => 
  [...arr].sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 92 },
  { name: "Charlie", score: 78 }
];
const sortedByScore = sortBy(students, "score");
console.log("6. sortBy - students sorted by score:", sortedByScore);

// 7. Write pipeline(...functions) that chains functions
const pipeline = (...functions) => (value) => 
  functions.reduce((acc, fn) => fn(acc), value);
const addTwo = x => x + 2;
const multiplyByThree = x => x * 3;
const subtract = x => x - 5;
const pipe = pipeline(addTwo, multiplyByThree, subtract);
console.log("7. pipeline - chain functions:", pipe(10)); // ((10 + 2) * 3) - 5 = 31

// 8. Create withTax(taxRate) that returns a function to add tax
const withTax = (taxRate) => (price) => price * (1 + taxRate);
const addGST = withTax(0.18); // 18% tax
console.log("8. withTax - add 18% tax to $100:", addGST(100)); // 118

// 9. Write debounce(fn, delay) - basic version
const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};
console.log("9. debounce - basic version created");
const debouncedLog = debounce((msg) => console.log("   Debounced:", msg), 1000);
// debouncedLog("This will be delayed");

// 10. Create memoize(fn) that caches results
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("   Returning cached result");
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};
console.log("10. memoize - cache expensive function:");
const expensiveCalculation = (n) => {
  console.log("   Computing...");
  return n * n;
};
const memoizedCalc = memoize(expensiveCalculation);
console.log("   First call memoizedCalc(5):", memoizedCalc(5));
console.log("   Second call memoizedCalc(5):", memoizedCalc(5));
