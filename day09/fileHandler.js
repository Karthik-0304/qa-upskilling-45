// day09/fileHandler.js
const fs = require('fs');

try {
    // Attempting to read a configuration file
    const data = fs.readFileSync('config.json', 'utf8');
    console.log("Config loaded successfully:", data);
} catch (error) {
    console.error("ERROR: Configuration file missing or malformed.", error.message);
} finally {
    console.log("File read operation completed.");
}