// day06/collectionsDemo.js

// 1. Arrays: Storing a list of test execution times (ms)
const testDurations = [120, 450, 80, 600, 310];

// Using map() to add a network latency buffer to each test time
const bufferedDurations = testDurations.map(duration => duration + 50);
console.log("Buffered Durations:", bufferedDurations);

// Using filter() to isolate slow tests (> 400ms)
const slowTests = testDurations.filter(duration => duration > 400);
console.log("Slow Tests (>400ms):", slowTests);

// 2. Objects: Modeling test suite metadata
const testSuiteInfo = {
    suiteName: "Checkout_Regression",
    totalTests: 15,
    environment: "staging"
};
console.log(`Executing ${testSuiteInfo.suiteName} on [${testSuiteInfo.environment}]`);

// 3. Maps: Key-value lookup for test configuration thresholds
const timeoutConfig = new Map();
timeoutConfig.set("loginPage", 5000);
timeoutConfig.set("checkoutPage", 10000);
console.log("Checkout Timeout Limit:", timeoutConfig.get("checkoutPage"), "ms");

// 4. Sets: Ensuring unique list of executed feature tags
const executedTags = new Set(["@smoke", "@regression", "@smoke", "@login"]);
console.log("Unique Tags Executed (Duplicates discarded):", executedTags);

// 5. Iteration Patterns: Using for...of loop over arrays
console.log("\nIterating over test durations:");
for (const time of testDurations) {
    console.log(`- Test duration logged: ${time}ms`);
}