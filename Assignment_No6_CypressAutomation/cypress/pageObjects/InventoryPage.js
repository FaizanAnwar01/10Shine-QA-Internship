class InventoryPage {
    // Locators
    getPageTitle() {
        return cy.get('.title');
    }

    getInventoryList() {
        return cy.get('.inventory_list');
    }

    getSpecificProduct(productName) {
        return cy.contains('.inventory_item_name', productName);
    }

    getProductPrice(productName) {
        // This navigates from the item name up to its container, then finds the price
        return this.getSpecificProduct(productName)
            .parents('.inventory_item_description')
            .find('.inventory_item_price');
    }

    // Actions
    verifyPageLoaded() {
        this.getPageTitle().should('be.visible').and('contain.text', 'Products');
        this.getInventoryList().should('be.visible');
    }

    clickProduct(productName) {
        this.getSpecificProduct(productName).click();
    }
}

export default new InventoryPage();