describe('Navigation', () => {
    it('should allow a user to see different pages based on url paths', () => {
        cy.visit('http://localhost:3000/');
        cy.get('.home').contains('Home');

        cy.visit('http://localhost:3000/blog');
        cy.get('.blog').contains('Blog');

        cy.visit('http://localhost:3000/tutorials');
        cy.get('.tutorials').contains('Tutorials');

        cy.visit('http://localhost:3000/contact');
        cy.get('.contact').contains('Contact');
    });
});