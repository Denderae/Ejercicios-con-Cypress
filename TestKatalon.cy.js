describe('Pruebas E2E', () => {
    beforeEach(() => {
        cy.visit("https://katalon-demo-cura.herokuapp.com/")
    })
   

    it("Prueba E2E Happy path formulario primeras opciones del formulario", () => {
        cy.get('#top').should('be.visible')//Que el id "top" se muestre correctamente en el header
        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type("John Doe")
        cy.get('#txt-password').type("ThisIsNotAPassword")
        cy.get('#btn-login').click()
        cy.get('#combo_facility').select("Tokyo CURA Healthcare Center")
        cy.get('#chk_hospotal_readmission').check()
        cy.get('#radio_program_medicare').check()
        cy.get('#txt_visit_date').click()
        cy.get('tbody > :nth-child(3) > :nth-child(5)').click()    
        cy.get('#txt_comment').type("Test numero 1")
        cy.contains("Book Appointment").click()
        cy.get('.col-xs-8').should('contain', 'Tokyo CURA Healthcare Center','Yes','Medicare','15/08/2024','Test numero 1')//Se valida contenido del formulario llenado
        cy.get('.text-center > .btn').click()
    })

    it("Prueba E2E Happy path formulario segundas opciones del formulario", () => {
        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type("John Doe")
        cy.get('#txt-password').type("ThisIsNotAPassword")
        cy.get('#btn-login').click()
        cy.get('#combo_facility').select("Hongkong CURA Healthcare Center")
        cy.get('#chk_hospotal_readmission').check() 
        cy.get('#radio_program_medicaid').check()
        cy.get('#txt_visit_date').click()
        cy.get('tbody > :nth-child(5) > :nth-child(7)').click()
        cy.get('tbody > :nth-child(5) > :nth-child(7)').should('not.be.visible')
        cy.contains("Book Appointment").click()
    })

    it("Prueba E2E Happy path formulario terceras opciones del formulario", () => {
        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type("John Doe")
        cy.get('#txt-password').type("ThisIsNotAPassword")
        cy.get('#btn-login').click()
        cy.get('#combo_facility').select("Seoul CURA Healthcare Center")
        cy.get('#chk_hospotal_readmission').check() 
        cy.get('#radio_program_none').check()
        cy.get('#txt_visit_date').click()
        cy.get('tbody > :nth-child(4) > :nth-child(4)').click()
        cy.get('tbody > :nth-child(4) > :nth-child(4)').should('not.be.visible')
        cy.get('#txt_comment').type("Test numero 2")
        cy.contains("Book Appointment").click()

    })

    it("Prueba negativa inicio de sesion ", () => {
        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type("John Doe8")
        cy.get('#txt-password').type("ThisIsNotAPassword8")
        cy.get('#btn-login').click()
        cy.get('#combo_facility').select("Seoul CURA Healthcare Center")
        cy.get('#chk_hospotal_readmission').check() 
        cy.get('#radio_program_none').check()
        cy.get('#txt_visit_date').click()
        cy.get('tbody > :nth-child(4) > :nth-child(4)').click()
        cy.get('tbody > :nth-child(4) > :nth-child(4)').should('not.be.visible')
        cy.contains("Book Appointment").click()

    })

    it("Prueba negativa no se llena campo requerido fecha ", () => {
        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type("John Doe")
        cy.get('#txt-password').type("ThisIsNotAPassword")
        cy.get('#btn-login').click()
        cy.get('#combo_facility').select("Seoul CURA Healthcare Center")
        cy.get('#chk_hospotal_readmission').check() 
        cy.get('#radio_program_none').check()
        cy.get('#txt_comment').type("Test numero 3")
        cy.contains("Book Appointment").click()
    })

})
