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

    
    getPageUrl() {
        return `${this.strings.LOGINPAGE_URL}`;
      }

    visitUrl() {
        cy.visit(this.getPageUrl());
      }

}

const loginpage= new login()
export const  lp=loginpage;