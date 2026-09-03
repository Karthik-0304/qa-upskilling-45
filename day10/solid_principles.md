# SOLID Principles in Test Automation

SOLID is an acronym for five design principles intended to make software designs more understandable, flexible, and maintainable. In test automation and frameworks like Playwright, applying these principles prevents fragile test suites and unmaintainable codebases.

## 1. Single Responsibility Principle (SRP)

* **Definition**: A class or module should have one, and only one, reason to change.
* **QA Application**: In a Page Object Model (POM) architecture, separate UI operations from test logic and assertions. A `LoginPage` class should only contain locators and methods to interact with the login elements (e.g., `enterUsername()`, `clickSubmit()`). It should **not** contain `expect()` assertions. The test file itself is responsible for calling page methods and validating outcomes.

## 2. Open/Closed Principle (OCP)

* **Definition**: Software entities should be open for extension, but closed for modification.
* **QA Application**: When designing a Driver Factory or Environment Configuration loader, you should be able to add support for a new browser (e.g., WebKit or a custom mobile viewport) or a new environment (e.g., `qa2` or `pre-prod`) by writing new code or adding configuration keys—without rewriting existing core factory logic.

## 3. Liskov Substitution Principle (LSP)

* **Definition**: Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.
* **QA Application**: If you have a base `BasePage` class that defines standard methods like `waitForLoad()`, any extended page class (`CheckoutPage`, `DashboardPage`) must support these methods seamlessly. A test running against a subclass should never fail due to unexpected behavior modifications in overridden base methods.

## 4. Interface Segregation Principle (ISP)

* **Definition**: A client should never be forced to implement an interface that it doesn't use, or clients shouldn't depend on methods they do not call.
* **QA Application**: Instead of creating a massive, monolithic utility class containing methods for UI actions, database queries, and API requests all jumbled together, segregate them into smaller, focused helper modules (`DatabaseHelper`, `ApiHelper`, `UiHelper`). Test files only import and depend on the utilities relevant to their execution.

## 5. Dependency Inversion Principle (DIP)

* **Definition**: High-level modules should not depend on low-level modules; both should depend on abstractions.
* **QA Application**: Instead of hardcoding environment configurations, API base URLs, or browser options directly inside test files or page classes, pass them dynamically through configuration managers or dependency injection. This decouples your test scripts from rigid runtime dependencies.