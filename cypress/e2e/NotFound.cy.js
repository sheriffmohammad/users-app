
describe('Not Found', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/random-page')
    })

    it('should show page not found', () => {
        cy.get('#not-found').should('exist');
    })
})