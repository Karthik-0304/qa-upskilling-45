// day03/loopDemo.js

// 1. Switch Statement for Browser Configuration
const browserType = "firefox";

switch (browserType) {
    case "chromium":
        console.log("Initializing Google Chrome / Edge driver context...");
        break;
    case "firefox":
        console.log("Initializing Mozilla Firefox driver context...");
        break;
    case "webkit":
        console.log("Initializing Apple Safari WebKit context...");
        break;
    default:
        console.log("Unsupported browser specified. Defaulting to Chromium.");
}

// 2. For Loop for Batch Test Data Generation
console.log("\nGenerating test user accounts:");
for (let i = 1; i <= 3; i++) {
    console.log(`Creating test_user_${i}@qaautomation.com`);
}