


  export class dummyapi{

    username(){
        cy.get('[id="user-name"]').type('hi')
    }
  }

  const commonMethods = new dummyapi();
  export const dapi = commonMethods;
 