// aprendendo.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test




describe('Um subgrupo de testes', ()=> {
    it('Um teste em um subgrupo', ()=> {
        cy.visit('https://example.cypress.io')

        cy.contains('type').click()
    
        // Should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/actions')
    
        // Get an input, type into it and verify that the value has been updated
        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
    })

})