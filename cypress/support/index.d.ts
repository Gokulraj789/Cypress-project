declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to log in to the application.
       * @param link - The text of the sign-in link.
       * @param username - The username for login.
       * @param password - The password for login.
       */
      signup(linkname:string,username: string, password: string): Chainable<void>;
    }
  }