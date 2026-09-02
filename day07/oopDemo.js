// day07/oopDemo.js

class LoginPageModel {
    // Private field encapsulating the page URL
    #url = "https://example.com/login";
    
    constructor(timeout) {
        this.timeout = timeout;
    }

    // Getter to securely expose the private URL
    getUrl() {
        return this.#url;
    }

    // Method representing a page action
    clickLoginButton() {
        console.log(`Clicking login button with timeout: ${this.timeout}ms`);
    }
}

// Instantiating an object from the class blueprint
const loginPage = new LoginPageModel(5000);
console.log(`Navigating to: ${loginPage.getUrl()}`);
loginPage.clickLoginButton();