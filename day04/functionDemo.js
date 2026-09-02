// day04/functionDemo.js

// 1. Traditional Function for Test URL Formatting
function formatTestUrl(env = "staging", endpoint = "login") {
    const baseUrl = `https://${env}.qa-store.com`;
    return `${baseUrl}/${endpoint}`;
}

// 2. Modern Arrow Function for Calculating Test Pass Rate
const calculatePassRate = (passed, total) => {
    if (total === 0) return 0;
    return (passed / total) * 100;
};

// Invoking functions
console.log(`Target URL: ${formatTestUrl("prod", "checkout")}`);
console.log(`Default URL: ${formatTestUrl()}`);
console.log(`Execution Pass Rate: ${calculatePassRate(45, 50)}%`);