// Optional: require any custom commands or additional setup
require('@4tw/cypress-drag-drop');

describe('Luma Application', () => {

    beforeEach(() => {
        cy.visit("https://magento.softwaretestingboard.com/");
       // cy.visit(Cypress.env('Luma_url'));

        //cy.visit('https://magento.softwaretestingboard.com/');
    });

    it('Validates the Logo of the Application',{retries:1}, () => {
        
        cy.get('[aria-label="store logo"]').should('be.visible');
    });

    it('Signs Up with Valid Credentials', () => {
        
        cy.signUp('gokulrajrg04@gmail.com','Gokul2359@');
        // cy.get('[class="header links"]').contains('Sign In').click();
        // cy.get('[name="login[username]"]').type('gokulrajrg04@gmail.com');
        // cy.get('[name="login[password]"]').type('Gokul2359@');
        // cy.get('[class="action login primary"]').click();

        // Add assertion here to verify successful login if needed, e.g., URL change or presence of a logout button
        cy.get('.welcome').should('contain.text', 'Welcome');
    });

    it('Verifies Incorrect Credentials Error for Sign Up', () => {
        cy.get('[class="header links"]').contains('Sign In').click();
        cy.get('[name="login[username]"]').type('gokulrajrg04@gmail.com');
        cy.get('[name="login[password]"]').type('Gokul2359');
        cy.get('[class="action login primary"]').click();
        cy.get('[class="page messages"]')
          .should('include.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
    });

    it('Verifies Tab Names', () => {
        const tabNames = ['Women', 'Men', 'Gear', 'Training', 'Sale'];
        tabNames.forEach(tabName => {
            cy.get('[id="store.menu"]').contains(tabName).should('be.visible');
        
        });
    });

});