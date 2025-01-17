declare namespace Cypress {
    interface Chainable {
      /**
       * @param username - The username for login.
       * @param password - The password for login.
       */
      signIn(username: string, password: string): Chainable<void>;
      drag(targetSelector: string): Chainable<void>;
    }
  }