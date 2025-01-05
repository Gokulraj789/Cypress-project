import { lp } from "../Pages/LoginPage"
import{ hp } from "../Pages/HomePage"
require('@4tw/cypress-drag-drop');


describe('Luma Application', () => {

    it('Navigate and Validates the Logo of the Application',{retries:1}, () => {
        lp.visitUrl();
        cy.get(lp.selectors.LOGO).should('be.visible');
    });

    it('Signs Up with Valid Credentials', () => {
        cy.signup('Sign In','gokulrajrg04@gmail.com','Gokul2359@');
        cy.get(hp.strings.WC).should('contain.text', 'Welcome');
    });

    it('Signs out the Existing Account', () => {
        hp.getSignOut_DD(0).click({force:true});
        cy.get(hp.selectors.SIGNOUT_OPTION)
        .contains(hp.strings.SIGNOUT)
        .click({force:true})
    });

    it('Verifies Tab Names', () => {
        const tabNames = ['Women', 'Men', 'Gear', 'Training', 'Sale'];
        tabNames.forEach(tabName => {
            hp.getTabList().contains(tabName).should('be.visible');
        });
     });

});