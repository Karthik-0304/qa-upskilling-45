const testReports = {
    loginPage : true,
    searchPage : false,
    addToCartPage : true,
    checkoutPage : false,
    productPage : true,
}

const failedTests = Object.keys(testReports).filter((key) => testReports[key] === false);

console.log(failedTests); // Output: [ 'searchPage', 'checkoutPage' ]


const result = new Set();

Object.keys(testReports).forEach((key) => {
    result.add(testReports[key]); 
});

console.log(result);


const pages = new Map();

pages.set("loginPage", 3);
pages.set("searchPage", 1);
pages.set("addToCartPage", 3);
pages.set("checkoutPage", 2);
pages.set("productPage", 1);

for (const [page, count] of pages) {
    if (count > 2) {
        console.log(`Page: ${page} has more than 2 test executions.`);
    }   
}

