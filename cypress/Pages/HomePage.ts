export class homepage{


  get selectors(){

    return {

      TABLIST:'[id="store.menu"]',
      SIGNOUT_DD:'[data-action="customer-menu-toggle"]',
      SIGNOUT_OPTION:'ul[class="header links"] li',

    }
  }

  get strings(){

    return{
      
      SIGNOUT:'Sign Out',
      WC:'.welcome'
    }
  }

  getTabList (){
    return cy.get(this.selectors.TABLIST)
  }

  getSignOut_DD (index:number){
    return cy.get(this.selectors.SIGNOUT_DD).eq(index)
  }
}

export const hp=new homepage();


