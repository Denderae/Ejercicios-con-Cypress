// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Comando para obtener un párrafo
Cypress.Commands.add('CompleteP', (Paragraph) => {
  cy.get('p').contains(Paragraph)
})

// Comando para validar la información del hotel
Cypress.Commands.add('ValidarInfoHotel', (hotelData) => {
  cy.CompleteP(hotelData.name).should('be.visible')
  cy.CompleteP(hotelData.address).should('be.visible')
  cy.CompleteP(hotelData.phone).should('be.visible')
  cy.CompleteP(hotelData.email).should('be.visible')
})

// Comando para validar las imágenes en la página
Cypress.Commands.add('validarImagen', (imagenesData, idSeleccionado) => {
  imagenesData.ValidarImagenes.forEach((imagen) => {
    if (imagen.id === idSeleccionado) {
      cy.get(imagen.selector).should('be.visible')
    }
  })
})

// Comando para validar el envío de formulario
Cypress.Commands.add('validarEnvioFormulario', (formErrors, alias, expectedStatusCode) => {
  cy.get('#submitContact').click()
  cy.get('.alert').should('be.visible')

  formErrors.forEach((error) => {
    cy.CompleteP(error)
  })

  cy.wait(alias).then((interception) => {
    expect(interception.response.statusCode).to.equal(expectedStatusCode)
  })
})

// Comando para validar el formulario incorrecto
Cypress.Commands.add('validarFormularioIncorrecto', (formData, formErrors) => {
  cy.llenarFormulario(formData)

  formErrors.forEach((error) => {
    cy.contains(error).should('be.visible')
  })
})

// Comando para llenar el formulario
Cypress.Commands.add('llenarFormulario', (data) => {
    cy.get('input[placeholder="Name"]').type(data.name)
    cy.get('input[placeholder="Email"]').type(data.email)
    cy.get('input[placeholder="Phone"]').type(data.phone)
    cy.get('input[placeholder="Subject"]').type(data.subject)
    cy.get('[data-testid="ContactDescription"]').type(data.description)
    cy.get('#submitContact').click()
  })

  Cypress.Commands.add('llenarYEnviarFormulario', (data) => {
    cy.get('.col-sm-4 > :nth-child(1) > .form-control').type(data.nombre)
    cy.get('.col-sm-4 > :nth-child(2) > .form-control').type(data.apellido)
    cy.get('.col-sm-4 > :nth-child(3) > .form-control').type(data.email)
    cy.get('.col-sm-4 > :nth-child(4) > .form-control').type(data.mensaje)
  })
  