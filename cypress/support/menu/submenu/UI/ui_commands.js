/// <reference types="Cypress" />

Cypress.Commands.add('Login', () => {
    cy.get("#usuarioLogin").type(Cypress.env('user_E-mail'));
    cy.get("#senha").type(Cypress.env('user_password'));

    cy.get("button[type='submit']").click();
})