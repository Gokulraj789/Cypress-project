// Optional: require any custom commands or additional setup
require('@4tw/cypress-drag-drop');

describe('Luma Application', () => {

    beforeEach(() => {
       // cy.visit(Cypress.env('Luma_url'));
      //  cy.visit(Cypress.env('Luma_url'));

        cy.visit('https://magento.softwaretestingboard.com/');
    });

    it('Validates the Logo of the Application',{retries:1}, () => {
        
        cy.get('[aria-label="store logo"]').should('be.visible');
    });
});