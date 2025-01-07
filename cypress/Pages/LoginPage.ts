export class login{

    [x: string]: any;

    get selectors(){

        return{
            LOGO:'[aria-label="store logo"]',
        }
    };

    get strings(){
        return{
            
            LOGINPAGE_URL: `${Cypress.env("baseUrl")}`,
        }
    };

    
    visitUrl() {
        cy.visit(this.strings.LOGINPAGE_URL);
      }

}

export const  lp= new login();