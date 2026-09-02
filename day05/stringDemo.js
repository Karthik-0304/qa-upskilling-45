// day05/stringDemo.js

const testLogMessage = "   ERROR: User authentication failed for token_id: 98452_xyz   ";

// 1. Trimming whitespace
const cleanMessage = testLogMessage.trim();
console.log(`Cleaned Log: "${cleanMessage}"`);

// 2. Substring & indexOf extraction
const errorKeywordIndex = cleanMessage.indexOf("ERROR");
console.log(`Error keyword starts at index: ${errorKeywordIndex}`);

// 3. Splitting strings into arrays
const parts = cleanMessage.split(":");
console.log(`Log Status Header: ${parts[0].trim()}`);
console.log(`Log Details: ${parts[1].trim()}`);

// 4. Basic Regular Expression to extract numbers (Token ID)
const tokenIdMatch = cleanMessage.match(/\d+/);
console.log(`Extracted Token ID: ${tokenIdMatch[0]}`);