
describe("Pruebas sobre UI", () => {

    beforeEach (() => {
    
        cy.visit("https://the-internet.herokuapp.com")
        
    })
   
    it ('padres e hijos', () => {
        cy.contains('Welcome')
        .should('be.visible')
        
        
        
        

    })




    })
