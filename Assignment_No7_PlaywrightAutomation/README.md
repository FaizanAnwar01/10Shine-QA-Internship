# Assignment 7: E2E Web Automation (Microsoft Playwright)

**Domain:** Quality Assurance (Manual + Automation)  
**Author:** Muhammad Faizan Anwar  
**Target Application:** [Daraz.pk](https://www.daraz.pk/)  
**Framework:** Microsoft Playwright (JavaScript / Node.js)

## Project Overview
This repository contains the final automation assignment for the 10Shine QA Internship Program. Following the technical sync-up recommendations, Microsoft Playwright was utilized to automate a complex, highly dynamic E2E functional flow on the Daraz.pk e-commerce platform.

## Project Architecture (Page Object Model)
To ensure maximum scalability and resistance to UI changes, the framework implements a strict Page Object Model (POM):

* **`HomePage.js`:** Manages base navigation and dynamic search execution (`networkidle` waiting).
* **`SearchResultsPage.js`:** Handles complex UI interactions, including brand filtering, price boundaries, and dynamic element counting.
* **`ProductDetailsPage.js`:** Scans the DOM for specific shipping text and returns boolean assertions.

## Advanced QA Engineering Solutions
Automating a production e-commerce site requires bypassing anti-bot measures and dynamic rendering:
1. **URL Hijacking (Tab Management):** Daraz unpredictably opens products in new tabs or suppresses them entirely. To achieve 100% stability, the script extracts the raw `href` attribute from the DOM and forces the current tab to navigate to the product, completely eliminating cross-tab timeouts.
2. **Keyboard Simulation:** Bypassed dynamically changing button names by simulating raw keyboard `Enter` events for reliable form submission.
3. **Overriding Global Timeouts:** Configured Playwright to allow extended execution time (`120000ms`) to accommodate Daraz's heavy asset loading.

## How to Run the Tests

### Prerequisites
* Node.js installed.

### Installation
Clone the repository and install Playwright dependencies:
```bash
npm install
npx playwright install

## Directory Structure
To ensure maximum scalability and resistance to UI changes, the framework implements a strict Page Object Model (POM). 

```text
📦 ASSIGNMENT_NO7_PLAYWRIGHTAUTOMATION
 ┣ 📂 .github                 # CI/CD pipeline configurations (GitHub Actions)
 ┣ 📂 pageObjects             # Page Object Model (POM) classes
 ┃ ┣ 📜 HomePage.js           # Locators/methods for navigation and search
 ┃ ┣ 📜 ProductDetailsPage.js # Locators/methods for product validation (shipping)
 ┃ ┗ 📜 SearchResultsPage.js  # Locators/methods for filters and URL extraction
 ┣ 📂 playwright-report       # Auto-generated HTML execution report
 ┃ ┣ 📂 data                  # Report assets
 ┃ ┣ 📂 trace                 # Trace viewer assets
 ┃ ┗ 📜 index.html            # Main interactive dashboard
 ┣ 📂 test-results            # Debugging artifacts for test executions
 ┃ ┗ 📂 daraz-Assignment...   # Specific test run artifacts
 ┃   ┣ 🖼️ test-finished-1.png # Auto-captured execution screenshot
 ┃   ┗ 🗜️ trace.zip           # Trace viewer data package
 ┣ 📂 tests                   # Core E2E test suite
 ┃ ┗ 📜 daraz.spec.js         # The main Daraz functional flow script
 ┣ 📜 .gitignore              # Ignored files for version control
 ┣ 📜 package.json            # Project dependencies and scripts
 ┗ 📜 playwright.config.js    # Playwright framework configurations (timeouts, reporters)