// day08/inheritanceDemo.js

// 1. Parent (Base) Class
class BasePage {
    constructor(browserName) {
        this.browserName = browserName;
    }

    navigateTo(url) {
        console.log(`[${this.browserName}] Navigating to URL: ${url}`);
    }
}

// 2. Child Class extending BasePage
class LoginPage extends BasePage {
    constructor(browserName) {
        super(browserName); // Calls parent constructor
    }

    // Method overriding
    navigateTo(url) {
        super.navigateTo(url);
        console.log("Executing login page specific security checks...");
    }
}

// Instantiating and running
const loginPage = new LoginPage("Chromium");
loginPage.navigateTo("https://example.com/login");