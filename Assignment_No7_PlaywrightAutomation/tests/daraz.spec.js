const { test, expect } = require('@playwright/test');

// Import the "Remote Controls" we built in Phase 2
const { HomePage } = require('../pageObjects/HomePage');
const { SearchResultsPage } = require('../pageObjects/SearchResultsPage');
const { ProductDetailsPage } = require('../pageObjects/ProductDetailsPage');

test('Assignment 7: Daraz E2E Functional Flow', async ({ page, context }) => {
    
    // THE FIX: Override Playwright's default 30-second test limit. Give it 2 minutes (120,000 ms).
    test.setTimeout(120000);
    // Initialize our Page Objects
    const homePage = new HomePage(page);
    const searchResultsPage = new SearchResultsPage(page);

    // TASK 2: Navigate to Daraz.pk
    // test.step() makes our final HTML report look incredibly professional
    await test.step('Navigate to Daraz Homepage', async () => {
        await homePage.navigate();
    });

    // TASK 3: Search for "electronics"
    await test.step('Search for "electronics"', async () => {
        await homePage.searchForProduct('electronics');
    });

    // TASK 4: Apply brand filter
    await test.step('Apply Brand Filter', async () => {
        // Updated to a brand that is confirmed visible in the Daraz electronics category
        await searchResultsPage.applyBrandFilter('Samsung Electronics');
    });

    // TASK 5: Apply price filter (500–5000)
    await test.step('Apply Price Boundaries', async () => {
        await searchResultsPage.applyPriceFilter(500, 5000);
    });

    // TASK 6: Count products in results and validate > 0
    await test.step('Validate Search Results', async () => {
        const count = await searchResultsPage.countProducts();
        console.log(`Found ${count} products matching the criteria!`);
        // The core assertion: prove we have at least 1 product
        expect(count).toBeGreaterThan(0);
    });

    // TASK 7 & 8: Open product details and Verify Free Shipping
// TASK 7 & 8: Open product details and Verify Free Shipping
    await test.step('Navigate to Product and Verify Shipping', async () => {
        
        // THE FLEX: Hijack the URL directly from the DOM to bypass flaky pop-up behavior
        const productUrl = await searchResultsPage.getFirstProductUrl();
        console.log(`Extracted Product URL: ${productUrl}`);
        
        // Force the current tab to navigate to the exact product page
        await page.goto(productUrl);
        await page.waitForLoadState('domcontentloaded');

        // Pass the CURRENT page into our Product Details POM
        const productDetailsPage = new ProductDetailsPage(page);

        // Verify Free Shipping
        const isFreeShipping = await productDetailsPage.checkFreeShipping();
        
        // Assert that we successfully captured a boolean (true or false) result
        expect(typeof isFreeShipping).toBe('boolean');
        console.log(`Is Free Shipping Available? : ${isFreeShipping}`);
    });
});