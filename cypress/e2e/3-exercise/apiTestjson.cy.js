describe('Pruebas API', () => {
    it("Prueba API import tags json", () => {
        cy.intercept('GET','https://conduit-api.bondaracademy.com/api/tags',{fixture:'tags.json'})
        cy.visit("https://conduit.bondaracademy.com/")
        cy.contains('10').should('exist')

    })
})
