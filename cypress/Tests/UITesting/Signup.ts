import { lp } from "../../Pages/LoginPage"
import{ hp } from "../../Pages/HomePage"
require('@4tw/cypress-drag-drop');



describe('Luma Application', () => {

    it('Navigate and Validates the Logo of the Application',{retries:1}, () => {
        lp.visitUrl();
        cy.get(lp.selectors.LOGO, {timeout:2000}).should('be.visible');
    });

    it('Signs Up with Valid Credentials', () => {
        cy.signIn(Cypress.env("username"),Cypress.env("password"));
       // cy.get(hp.strings.WC).should('contain.text', hp.strings.WC);
    });

    it('Signs out the Existing Account', () => {
        hp.getSignOut_DD(0).click({force:true});
        cy.get(hp.selectors.SIGNOUT_OPTION)
        .contains(hp.strings.SIGNOUT)
        .click({force:true})
    });

    it('Verifies Tab Names', () => {
       cy.fixture('Homepage.json').then((data)=>{
        const tabs=data.tabnames;
        tabs.forEach(tabName => {
            hp.getTabList().contains(tabName).should('be.visible');
       })
    })  
});
});