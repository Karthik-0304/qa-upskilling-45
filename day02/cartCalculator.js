const storeName = "My Online Store";
const taxRate = 0.08; // 8% tax rate

let item1 = 49.99;
let item2 = 15.50;
let item3 = 10.00;

let subtotal = item1 + item2 + item3;

let total = subtotal + (subtotal * taxRate);

let isEligibleForFreeShipping = false;

console.log(`Store Name: ${storeName}`);
if (total > 75) {
    isEligibleForFreeShipping = true;
    console.log("Congratulations! You qualify for free shipping.");
}
else {
    console.log("You do not qualify for free shipping.");
}