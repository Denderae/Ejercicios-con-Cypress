describe('Mi Suite de Pruebas', () => {
    it('debería validar el uso de XPath', () => {
      cy.visit("https://katalon-demo-cura.herokuapp.com/")
      cy.xpath('//*[@id="btn-make-appointment"]').should('exist');


      
    })
  })
  