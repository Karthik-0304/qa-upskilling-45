// day10/designPatterns.js

// 1. Singleton Pattern for Configuration Management
class ConfigurationManager {
    static #instance = null;

    constructor() {
        if (ConfigurationManager.#instance) {
            return ConfigurationManager.#instance;
        }
        this.environment = "staging";
        this.baseUrl = "https://staging.qa-store.com";
        this.timeout = 10000;
        ConfigurationManager.#instance = this;
    }

    // Global access point to get the single instance
    static getInstance() {
        if (!ConfigurationManager.#instance) {
            new ConfigurationManager();
        }
        return ConfigurationManager.#instance;
    }
}

// 2. Factory Pattern for Browser/Environment generation
class DriverFactory {
    static createDriver(browserType) {
        switch (browserType.toLowerCase()) {
            case "chromium":
                console.log("Factory: Initializing Chromium browser instance...");
                return { name: "ChromiumDriver", headless: true };
            case "firefox":
                console.log("Factory: Initializing Firefox browser instance...");
                return { name: "FirefoxDriver", headless: true };
            case "webkit":
                console.log("Factory: Initializing WebKit/Safari browser instance...");
                return { name: "WebKitDriver", headless: true };
            default:
                throw new Error(`Unsupported browser type: ${browserType}`);
        }
    }
}

// Driver Execution / Testing our Patterns
const config1 = ConfigurationManager.getInstance();
const config2 = ConfigurationManager.getInstance();

console.log("Are both configuration instances identical (Singleton)?", config1 === config2);
console.log(`Current Target Environment: ${config1.environment} (${config1.baseUrl})`);

const selectedBrowser = DriverFactory.createDriver("chromium");
console.log(`Successfully spawned: ${selectedBrowser.name}`);