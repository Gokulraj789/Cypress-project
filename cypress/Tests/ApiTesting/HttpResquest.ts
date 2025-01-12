describe('Http Request',()=>{


    it('GET METHOD',()=>{
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200);

        
    })

    it('post Method',()=>{

        cy.request({
            method:'POST',
            url:'https://jsonplaceholder.typicode.com/posts/',
            
        })


    })
})