
describe('Not Found', () => {

    // Go to a non-existent page

    beforeEach(() => {
        cy.visit('http://localhost:3000/random-page')
    })

    it('should show page not found', () => {

        // An element with id "not-found" should exist

        cy.get('#not-found').should('exist');
    })
})