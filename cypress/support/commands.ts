import './commands';
import '@4tw/cypress-drag-drop';
import 'cypress-drag-drop';

export const selectors = {
    headerLinks: '[class="header links"]',
    usernameField: '[name="login[username]"]',
    passwordField: '[name="login[password]"]',
    loginButton: '.action.login.primary',
  };
  
Cypress.Commands.add('signIn', (username: string, password: string) => {
    cy.get(selectors.headerLinks).contains('Sign In').click(); 
    cy.get(selectors.usernameField).type(username);
    cy.get(selectors.passwordField).type(password);
    cy.get(selectors.loginButton).click();
  });


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