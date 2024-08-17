
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
        // Selecciona el contenedor con la clase 'col-xs-8'
        cy.get('.col-xs-8')
            // Verifica que contenga el texto 'Tokyo CURA Healthcare Center'
            .should('contain', 'Tokyo CURA Healthcare Center')
            // Verifica que contenga el texto 'Yes'
            .and('contain', 'Yes')
            // Verifica que contenga el texto 'Medicare'
            .and('contain', 'Medicare')
            // Verifica que contenga la fecha '15/08/2024'
            .and('contain', '15/08/2024')
            // Verifica que contenga el texto 'Test numero 1'
            .and('contain', 'Test numero 1')

        cy.contains("Go to Homepage").click()
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
        cy.contains("Book Appointment").click()
        cy.get('.col-xs-8')
            // Verifica que contenga el texto 'Hongkong CURA Healthcare Center'
            .should('contain', 'Hongkong CURA Healthcare Center')
            // Verifica que contenga el texto 'Yes'
            .and('contain', 'Yes')
            // Verifica que contenga el texto 'Medicaid'
            .and('contain', 'Medicaid')
            // Verifica que contenga la fecha '31/08/2024'
            .and('contain', '31/08/2024')

        cy.contains("Go to Homepage").click()
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
        cy.get('tbody > :nth-child(3) > :nth-child(5)').should('not.be.visible') //Deberia cerrarse el formulario calendario despues del clic
        cy.get('#txt_comment').type("Test numero 2")
        cy.contains("Book Appointment").click()
        cy.get('.col-xs-8')
        // Verifica que contenga el texto 'Seoul CURA Healthcare Center     '
        .should('contain', 'Seoul CURA Healthcare Center')
        // Verifica que contenga el texto 'Yes'
        .and('contain', 'Yes')
        // Verifica que contenga el texto 'None'
        .and('contain', 'None')
        // Verifica que contenga la fecha '31/08/2024'
        .and('contain', '21/08/2024')
        // Verifica que contenga el texto 'Test numero 2'
        .and('contain', 'Test numero 2')
    cy.contains("Go to Homepage").click()

    })

    it("Prueba negativa inicio de sesion ", () => {
        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type("John Doe8")
        cy.get('#txt-password').type("ThisIsNotAPassword8")
        cy.get('#btn-login').click()
        //Se espera mensaje de error login fallido
        cy.contains("Login failed! Please ensure the username and password are valid").should('be.visible')
        

    })

    it.only("Prueba negativa no se llena campo requerido fecha ", () => {
        cy.get('#btn-make-appointment').click()
        cy.get('#txt-username').type("John Doe")
        cy.get('#txt-password').type("ThisIsNotAPassword")
        cy.get('#btn-login').click()
        cy.get('#combo_facility').select("Seoul CURA Healthcare Center")
        cy.get('#chk_hospotal_readmission').check() 
        cy.get('#radio_program_none').check()
        cy.get('#txt_comment').type("Test numero 3")
        cy.contains("Book Appointment").click()
        cy.contains("Please fill out this field.").invoke('show').should('be.visible')
    })

})
