describe('Creacion de usuario y validacion de respuesta http', () => {
    it("Creacion de usuario OK", () => {
        cy.intercept('POST','/api/users').as('userCreado')
        cy.visit("https://conduit.bondaracademy.com/")
        cy.contains('Sign up').click()
        const numeroRandom = Math.floor(1000 + Math.random() * 9000);
        cy.get('[placeholder="Username"]').type(`test${numeroRandom}`)
        cy.get('[placeholder="Email"]').type(`test${numeroRandom}`)
        cy.get('[placeholder="Password"]').type(`test${numeroRandom}`)
        cy.get('.btn').click()
        cy.wait('@userCreado').then( interception => {
            expect(interception.response.statusCode).to.equals(201)})
            cy.log('Felicidades creaste un usuario')

        })
        
        //revisar documentacion cy.viewport() para adaptar la pantalla para distintos laptop , desktop ,movil . tambien se puede incluir en cypress.config
    })
