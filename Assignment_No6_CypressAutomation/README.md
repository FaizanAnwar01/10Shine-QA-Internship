# Assignment 6: Advanced Cypress E2E Automation

**Domain:** Quality Assurance (Manual + Automation)
**Author:** Muhammad Faizan Anwar
**Application:** SauceDemo (Swag Labs)
**Framework:** Cypress (JavaScript / Node.js)

---

# Project Overview

This project is an End-to-End (E2E) UI automation framework developed for the SauceDemo application using Cypress.

The framework follows industry-standard practices including:

* Page Object Model (POM)
* Custom Cypress Commands
* Automated Assertions
* Headless Execution
* Mochawesome HTML Reporting

---

# Features Implemented

## 1. Page Object Model (POM)

UI locators and page actions are separated into reusable classes for better maintainability.

## 2. Custom Commands

Reusable commands such as:

```javascript
cy.login(username, password)
```

help reduce code duplication.

## 3. Automated Test Coverage

The framework validates:

* Valid login
* Invalid login
* Locked user validation
* Inventory page navigation
* Product and price verification

## 4. Mochawesome Reporting

Interactive HTML reports are automatically generated after execution.

---

# Installation

Install all required dependencies:

```bash
npm install
```

---

# Test Execution

## Run in Interactive Mode

```bash
npm run cy:open
```

## Run in Headless Mode

```bash
npm run cy:run
```

---

# Report Generation

After execution, the HTML report is available at:

```text
cypress/reports/html/index.html
```

---

# Conclusion

This project demonstrates a scalable and maintainable Cypress automation framework using modern QA automation practices. The framework is suitable for CI/CD integration and enterprise-level UI testing.

---

# Project Folder Structure

```text
📦 ASSIGNMENT_NO6_CYPRESSAUTOMATION
 ┣ 📂 cypress
 ┃ ┣ 📂 e2e
 ┃ ┃ ┗ 📜 sauce_demo.cy.js
 ┃ ┣ 📂 pageObjects
 ┃ ┃ ┣ 📜 InventoryPage.js
 ┃ ┃ ┗ 📜 LoginPage.js
 ┃ ┣ 📂 reports
 ┃ ┃ ┗ 📂 html
 ┃ ┃   ┗ 📜 index.html
 ┃ ┗ 📂 support
 ┃   ┣ 📜 commands.js
 ┃   ┗ 📜 e2e.js
 ┣ 📜 cypress.config.js
 ┗ 📜 package.json
```
