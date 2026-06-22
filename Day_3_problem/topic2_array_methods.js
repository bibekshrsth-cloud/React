// ============================================
// TOPIC 3: Array Methods – 10 Practice Tasks
// (map, filter, reduce, find, forEach)
// ============================================

console.log("--- ARRAY METHODS ---\n");

// 1. Use map to double all numbers
const numbers1 = [1, 2, 3, 4, 5];
const doubled = numbers1.map(num => num * 2);
console.log("1. map - doubled [1,2,3,4,5]:", doubled); // [2, 4, 6, 8, 10]

// 2. Use filter to get all even numbers
const numbers2 = [1, 2, 3, 4, 5, 6];
const evens = numbers2.filter(num => num % 2 === 0);
console.log("2. filter - even numbers from [1,2,3,4,5,6]:", evens); // [2, 4, 6]

// 3. Use reduce to calculate the sum
const numbers3 = [10, 20, 30, 40];
const sum = numbers3.reduce((acc, num) => acc + num, 0);
console.log("3. reduce - sum of [10,20,30,40]:", sum); // 100

// 4. Use find to get first object with age > 18
const users = [
  { name: "Alice", age: 16 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 25 }
];
const adultUser = users.find(user => user.age > 18);
console.log("4. find - first user with age > 18:", adultUser); // { name: 'Bob', age: 20 }

// 5. Use forEach to log each element with index
const fruits = ["apple", "banana", "orange"];
console.log("5. forEach - fruits with index:");
fruits.forEach((fruit, index) => console.log(`   ${index}: ${fruit}`));

// 6. Use map to extract only names
const employees = [
  { id: 1, name: "Alice", position: "Developer" },
  { id: 2, name: "Bob", position: "Designer" },
  { id: 3, name: "Charlie", position: "Manager" }
];
const names = employees.map(emp => emp.name);
console.log("6. map - extract names:", names); // ['Alice', 'Bob', 'Charlie']

// 7. Use filter to get products with price < 100
const products = [
  { name: "Pen", price: 5 },
  { name: "Notebook", price: 15 },
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 30 }
];
const cheapProducts = products.filter(prod => prod.price < 100);
console.log("7. filter - products with price < 100:", cheapProducts);

// 8. Use reduce to find maximum value
const numbers4 = [15, 8, 25, 3, 42, 12];
const maxValue = numbers4.reduce((max, num) => (num > max ? num : max), numbers4[0]);
console.log("8. reduce - max value in array:", maxValue); // 42

// 9. Use map and filter together: names of adults (age >= 18) in uppercase
const people = [
  { name: "alice", age: 16 },
  { name: "bob", age: 22 },
  { name: "charlie", age: 18 },
  { name: "diana", age: 20 }
];
const adultNamesUppercase = people
  .filter(person => person.age >= 18)
  .map(person => person.name.toUpperCase());
console.log("9. map + filter - adult names uppercase:", adultNamesUppercase); 
// ['BOB', 'CHARLIE', 'DIANA']

// 10. Use forEach to build HTML unordered list string
const items = ["Home", "About", "Services", "Contact"];
let htmlList = "<ul>\n";
items.forEach(item => {
  htmlList += `  <li>${item}</li>\n`;
});
htmlList += "</ul>";
console.log("10. forEach - HTML unordered list:");
console.log(htmlList);
