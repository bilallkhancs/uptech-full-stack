// JavaScript Array of Objects - Practice Exercises 
// ============================================= 
// Sample data to use for the exercises 
const users = [ 
{ id: 1, name: "John", age: 25, email: "john@example.com", isActive: true, tags: ["developer", 
"javascript"] }, 
{ id: 2, name: "Jane", age: 32, email: "jane@example.com", isActive: false, tags: ["designer", 
"css"] }, 
{ id: 3, name: "Bob", age: 41, email: "bob@example.com", isActive: true, tags: ["developer", 
"python"] }, 
{ id: 4, name: "Mary", age: 28, email: "mary@example.com", isActive: true, tags: ["manager", 
"leadership"] }, 
{ id: 5, name: "Alex", age: 19, email: "alex@example.com", isActive: false, tags: ["intern", 
"student"] } 
]; 
const products = [ 
{ id: 101, name: "Laptop", price: 999.99, category: "electronics", stock: 15 }, 
{ id: 102, name: "Smartphone", price: 699.99, category: "electronics", stock: 25 }, 
{ id: 103, name: "Book", price: 19.99, category: "books", stock: 50 }, 
{ id: 104, name: "Headphones", price: 149.99, category: "electronics", stock: 10 }, 
{ id: 105, name: "T-shirt", price: 29.99, category: "clothing", stock: 100 }, 
{ id: 106, name: "Shoes", price: 79.99, category: "clothing", stock: 30 } 
]; 
const orders = [ 
{ id: 1001, userId: 1, products: [101, 104], totalAmount: 1149.98, date: "2023-01-15" }, 
{ id: 1002, userId: 3, products: [102], totalAmount: 699.99, date: "2023-01-18" }, 
{ id: 1003, userId: 2, products: [103, 105], totalAmount: 49.98, date: "2023-02-02" }, 
{ id: 1004, userId: 4, products: [101, 106], totalAmount: 1079.98, date: "2023-02-10" }, 
{ id: 1005, userId: 1, products: [105, 106], totalAmount: 109.98, date: "2023-02-15" } 
]; 
// ============================================= 
// Basic Exercises 
// ============================================= 
// Exercise 1: Filter 
// Write a function that returns all active users 
function getActiveUsers() {
  return users.filter(user => user.isActive);
}

// Exercise 2: Map 
// Write a function that returns an array containing just the names of all users 
function getUserNames() {
  return users.map(user => user.name);
}

// Exercise 3: Find 
// Write a function that finds and returns a user by their ID 
function findUserById(id) {
  return users.find(user => user.id === id);
}

// Exercise 4: Some/Every 
// Write a function that checks if all users are active 
function areAllUsersActive() {
  return users.every(user => user.isActive);
}

// Exercise 5: Reduce 
// Write a function that calculates the average age of all users 
function getAverageAge() {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  return totalAge / users.length;
}

// ============================================= 
// Intermediate Exercises 
// ============================================= 
// Exercise 6: Complex Filter 
// Write a function that returns users who are active and older than a specified age 
function getActiveUsersOlderThan(age) {
  return users.filter(user => user.isActive && user.age > age);
}
 
// Exercise 7: Sorting 
// Write a function that returns all products sorted by price (low to high) 
function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

// Exercise 8: Transformation 
// Write a function that transforms the users array into an object where the keys are the userIDs 
function transformUsersToObject() {
  return users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {});
}

// Exercise 9: Count Occurrences 
// Write a function that counts how many products are in each category 
function countProductsByCategory() {
  return products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});
}

// Exercise 10: Multiple Array Operations 
// Write a function that returns the emails of active users sorted by age (youngest first) 
function getActiveUserEmailsSortedByAge() {
  return users
    .filter(user => user.isActive)
    .sort((a, b) => a.age - b.age)
    .map(user => user.email);
}

// ============================================= 
// Advanced Exercises 
// ============================================= 
// Exercise 11: Nested Array/Object Operations 
// Write a function that returns all users who have "developer" in their tags 
function getDevelopers() {
  return users.filter(user => user.tags.includes("developer"));
}

// Exercise 12: Join Operations 
// Write a function that returns all orders with the user's name who placed the order 
function getOrdersWithUserNames() {
  return orders.map(order => {
    const user = users.find(u => u.id === order.userId);
    return { ...order, userName: user ? user.name : null };
  });
}

// Exercise 13: Advanced Join 
// Write a function that returns all orders with detailed product information 
function getOrdersWithProductDetails() {
  return orders.map(order => {
    const productDetails = order.products.map(pid => 
      products.find(p => p.id === pid)
    );
    return { ...order, productDetails };
  });
}
 
// Exercise 14: Aggregation 
// Write a function that calculates how much money each user has spent and returns an array  
// of objects with user name and total spent 
function getTotalSpentByUser() {
  return users.map(user => {
    const totalSpent = orders
      .filter(order => order.userId === user.id)
      .reduce((sum, order) => sum + order.totalAmount, 0);
    return { name: user.name, totalSpent };
  });
}

// Exercise 15: Complex Aggregation 
// Write a function that returns the most popular product (the one that appears in the most orders) 
function getMostPopularProduct() {
  const productCount = orders.reduce((acc, order) => {
    order.products.forEach(pid => {
      acc[pid] = (acc[pid] || 0) + 1;
    });
    return acc;
  }, {});

  const mostPopularId = Object.keys(productCount)
    .reduce((a, b) => productCount[a] > productCount[b] ? a : b);

  return products.find(p => p.id === parseInt(mostPopularId));
}

// ============================================= 
// Bonus Challenge Exercises 
// ============================================= 
// Exercise 16: Chain Multiple Operations 
// Write a function that returns the average price of all products purchased by active users 
function getAveragePriceOfProductsPurchasedByActiveUsers() {
  const activeUserIds = users.filter(u => u.isActive).map(u => u.id);

  const purchasedProducts = orders
    .filter(order => activeUserIds.includes(order.userId))
    .flatMap(order => order.products)
    .map(pid => products.find(p => p.id === pid));

  const totalPrice = purchasedProducts.reduce((sum, p) => sum + p.price, 0);
  return totalPrice / purchasedProducts.length;
}

// Exercise 17: Custom Reduce 
// Write a function that uses reduce to return an object with counts of  
// active vs. inactive users by age group (under 20, 21-30, 31-40, over 40) 
function getUserStatsByAgeGroup() {
  return users.reduce((acc, user) => {
    let group;
    if (user.age < 20) group = "under 20";
    else if (user.age <= 30) group = "21-30";
    else if (user.age <= 40) group = "31-40";
    else group = "over 40";

    if (!acc[group]) acc[group] = { active: 0, inactive: 0 };
    user.isActive ? acc[group].active++ : acc[group].inactive++;
    return acc;
  }, {});
}
 
// Exercise 18: Array Manipulation 
// Write a function that adds a new tag to all users who meet certain criteria 
// (e.g., add "premium" tag to all active users over 30) 
function addTagToQualifiedUsers(tag, isActive, minAge) {
  return users.map(user => {
    if (user.isActive === isActive && user.age > minAge) {
      return { ...user, tags: [...user.tags, tag] };
    }
    return { ...user };
  });
}

// Exercise 19: Complex Search 
// Write a function that finds users who have purchased a specific product 
function getUsersWhoPurchased(productId) {
  const userIds = orders
    .filter(order => order.products.includes(productId))
    .map(order => order.userId);

  return users.filter(user => userIds.includes(user.id));
}

// Exercise 20: Data Transformation Pipeline 
// Create a function that performs a complex series of transformations: 
// 1. Get all products purchased by active users 
// 2. Calculate the total revenue by category 
// 3. Return categories sorted by revenue (highest first) 
function getCategoriesByRevenueFromActiveUsers() {
  const activeUserIds = users.filter(u => u.isActive).map(u => u.id);

  const revenueByCategory = orders
    .filter(order => activeUserIds.includes(order.userId))
    .flatMap(order => order.products)
    .map(pid => products.find(p => p.id === pid))
    .reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + product.price;
      return acc;
    }, {});

  return Object.entries(revenueByCategory)
    .map(([category, revenue]) => ({ category, revenue }))
    .sort((a, b) => b.revenue - a.revenue);
}

// ============================================= 
// Test Your Solutions 
// ============================================= 
// Uncomment and run these test cases to check your solutions 
console.log("Active users:", getActiveUsers()); 
console.log("User names:", getUserNames()); 
console.log("User with ID 3:", findUserById(3)); 
console.log("Are all users active?", areAllUsersActive()); 
console.log("Average age:", getAverageAge()); 

