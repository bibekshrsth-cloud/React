//10 task of day 2

// TASK 1 — this inside object method

const user = {
  name: "Messi",
  login() {
    console.log(`User logged in: ${this.name}`);
  }
};

user.login();



// TASK 2 — this losing context + fix with bind

const button = {
  name: "LoginButton",
  click() {
    console.log(`Clicked: ${this.name}`);
  }
};

let lostClick = button.click;
lostClick();

let fixedClick = button.click.bind(button);
fixedClick();



// TASK 3 — Module: Export config

// config.js
export const API_BASE_URL = "https://api.example.com";


// main.js
import { API_BASE_URL } from "./config.js";

console.log(API_BASE_URL);


// TASK 4 — Utility functions module


// utils.js
export function formatCurrency(amount) {
  return `$${amount}`;
}

export function generateRandomId() {
  return Math.floor(Math.random() * 10000);
}

export function getTodayDate() {
  return new Date().toDateString();
}


// main.js
import { formatCurrency, generateRandomId, getTodayDate } from "./utils.js";

console.log(formatCurrency(500));
console.log(generateRandomId());
console.log(getTodayDate());



// TASK 5 — Product class


class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    console.log(`Product: ${this.name}, Price: ${this.price}`);
  }
}

const p1 = new Product("Laptop", 1200);
p1.getInfo();


// TASK 6 — Inheritance example


class FoodProduct extends Product {
  constructor(name, price, expiryDate) {
    super(name, price);
    this.expiryDate = expiryDate;
  }

  getInfo() {
    console.log(
      `Food: ${this.name}, Price: ${this.price}, Expiry: ${this.expiryDate}`
    );
  }
}

const f1 = new FoodProduct("Milk", 2, "2026-07-01");
f1.getInfo();



// TASK 7 — Promise (settings after 2 sec)


function getSettings() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        theme: "dark",
        language: "en"
      });
    }, 2000);
  });
}

getSettings().then((settings) => {
  console.log(settings);
});



// TASK 8 — async/await fetch users


function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Messi", "Ronaldo", "Neymar"]);
    }, 1000);
  });
}

async function showUsers() {
  const users = await fetchUsers();
  console.log(users);
}

showUsers();


// TASK 9 — try/catch API failure (random reject)


function fetchUsersWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;

      if (success) {
        resolve(["Messi", "Ronaldo"]);
      } else {
        reject("Failed to fetch users");
      }
    }, 1000);
  });
}

async function safeFetch() {
  try {
    const users = await fetchUsersWithError();
    console.log(users);
  } catch (error) {
    console.log("Friendly message: Something went wrong, try again");
  }
}

safeFetch();


// TASK 10 — Combine everything mini app


// config.js
export const API_BASE_URL = "https://api.example.com";


// utils.js
export function formatCurrency(amount) {
  return `$${amount}`;
}


// product.js
export class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}


// main.js
import { API_BASE_URL } from "./config.js";
import { formatCurrency } from "./utils.js";
import { Product } from "./product.js";

console.log("API:", API_BASE_URL);

function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        new Product("Phone", 800),
        new Product("Laptop", 1500)
      ]);
    }, 1000);
  });
}

async function app() {
  try {
    const products = await fetchProducts();

    products.forEach((p) => {
      console.log(`Product: ${p.name}, Price: ${formatCurrency(p.price)}`);
    });
  } catch (error) {
    console.log("Error loading products");
  }
}

app();