// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress Custom Command for Logging In
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.saucedemo.com/');
    
    // Only type if a username is provided
    if (username) {
        cy.get('[data-test="username"]').type(username);
    }
    
    // Only type if a password is provided
    if (password) {
        cy.get('[data-test="password"]').type(password);
    }
    
    cy.get('[data-test="login-button"]').click();
});