class LoginPage {
    // Locators
    getErrorMessage() {
        return cy.get('[data-test="error"]');
    }

    // Actions (If we need them outside the custom command)
    verifyErrorContains(expectedText) {
        this.getErrorMessage().should('be.visible').and('contain.text', expectedText);
    }
}

export default new LoginPage();