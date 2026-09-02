const websiteUrl = "https://www.saucedemo.com/";
let currentRetryAtttempts = 3;
const headlessMode = true;

console.log(`Navigating to : ${websiteUrl}`);
console.log(`Current Retry attempts :  ${currentRetryAtttempts}`);
console.log(`Headless mode : ${headlessMode}`);

currentRetryAtttempts++;

console.log(`Updated retry attempts : ${currentRetryAtttempts}`);

