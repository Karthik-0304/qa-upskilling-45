// day09/csvReader.js
const fs = require('fs');

function readAndParseCsv(filePath) {
    try {
        // Step 1: Attempt to read the file from disk
        if (!fs.existsSync(filePath)) {
            throw new Error(`File not found at path: ${filePath}`);
        }

        const fileContent = fs.readFileSync(filePath, 'utf8');

        // Step 2: Validate if the CSV data is malformed (e.g., empty)
        if (fileContent.trim() === "") {
            throw new Error("Malformed CSV: The file is completely empty.");
        }

        // Step 3: Parse rows by splitting newlines
        const rows = fileContent.split('\n');
        console.log(`Successfully parsed ${rows.length} rows from CSV.`);
        return rows;

    } catch (error) {
        // Step 4: Catch exceptions and write them to a log file instead of crashing
        const logEntry = `[ERROR] ${new Date().toISOString()} : ${error.message}\n`;
        fs.appendFileSync('error.log', logEntry);
        
        console.error("Caught an exception! Check 'error.log' for details.");
        return [];
    }
}

// Testing the function with a non-existent or malformed file path
readAndParseCsv('test_data.csv');