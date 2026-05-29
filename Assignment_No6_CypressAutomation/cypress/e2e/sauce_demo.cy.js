// Import the Page Objects we created in Phase 2
import LoginPage from '../pageObjects/LoginPage';
import InventoryPage from '../pageObjects/InventoryPage';

describe('Assignment 6: SauceDemo E2E Automation', () => {

    // TASK 2: Automate Login Failure Scenario
    it('Should fail to login with a locked out user and display an error', () => {
        // We use our custom command to skip writing the repetitive UI steps!
        cy.login('locked_out_user', 'secret_sauce');
        
        // We use our POM to handle the assertion cleanly
        LoginPage.verifyErrorContains('Epic sadface: Sorry, this user has been locked out.');
    });

    it('Should fail to login with incorrect credentials', () => {
        cy.login('standard_user', 'wrong_password');
        LoginPage.verifyErrorContains('Epic sadface: Username and password do not match any user in this service');
    });

    // TASK 3: Automate Login Success Flow and Homepage Validation
    it('Should login successfully with valid credentials and load the inventory', () => {
        cy.login('standard_user', 'secret_sauce');
        
        // Assert the URL changed to the inventory page
        cy.url().should('include', '/inventory.html');
        
        // Use our POM to verify the UI elements rendered correctly
        InventoryPage.verifyPageLoaded();
    });

    // TASK 4: Automate Product Navigation and Validation
    it('Should validate product price and navigate to the product details page', () => {
        cy.login('standard_user', 'secret_sauce');
        
        const targetProduct = 'Sauce Labs Backpack';
        
        // Assert the price on the dashboard using our POM logic
        InventoryPage.getProductPrice(targetProduct).should('contain.text', '$29.99');
        
        // Click the product to navigate
        InventoryPage.clickProduct(targetProduct);
        
        // Assert the navigation was successful
        cy.url().should('include', '/inventory-item.html');
        
        // Validate the product details page loaded the correct item
        cy.get('.inventory_details_name').should('have.text', targetProduct);
        cy.get('.inventory_details_price').should('contain.text', '$29.99');
    });

});