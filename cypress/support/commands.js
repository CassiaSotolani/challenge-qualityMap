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

Cypress.Commands.add('register_success', (firstName, lastName, email, password) => {
  cy.visit('https://demo.nopcommerce.com/register')
  cy.get('[type="radio"]').last().check()
  cy.get('#FirstName').type(firstName)
  cy.get('#LastName').type(lastName)
  cy.get('[name="DateOfBirthDay"]').select(18)
  cy.get('[name="DateOfBirthMonth"]').select('June')
  cy.get('[name="DateOfBirthYear"]').select('1991')
  cy.get('#Email').type(email)
  cy.get('#Newsletter').uncheck()
  cy.get('#Password').type(password)
  cy.get('#ConfirmPassword').type(password)
  cy.get('#register-button').click()
  cy.get('.result').contains('Your registration completed')
  cy.get('.buttons > .button-1').should('exist')
})

Cypress.Commands.add('login_error', (email, password) => {
  cy.visit('https://demo.nopcommerce.com/login')
  cy.get('#Email').type(email)
  cy.get('#Password').type(password)
  cy.get('form > .buttons > .button-1').click()
  cy.get('.message-error').contains('Login was unsuccessful. Please correct the errors and try again.')
})

Cypress.Commands.add('register_firstName_empty', (lastName, email, password) => {
  cy.visit('https://demo.nopcommerce.com/register')
  cy.get('#FirstName')
  cy.get('#LastName').type(lastName)
  cy.get('#Email').type(email)
  cy.get('#Password').type(password)
  cy.get('#ConfirmPassword').type(password)
  cy.get('#register-button').click()
  cy.get('.field-validation-error').contains('First name is required.')
})

Cypress.Commands.add('register_lastName_empty', (firstName, email, password) => {
  cy.visit('https://demo.nopcommerce.com/register')
  cy.get('#FirstName').type(firstName)
  cy.get('#LastName')
  cy.get('#Email').type(email)
  cy.get('#Password').type(password)
  cy.get('#ConfirmPassword').type(password)
  cy.get('#register-button').click()
  cy.get('.field-validation-error').contains('Last name is required.')
})

Cypress.Commands.add('register_email_empty', (firstName, lastName, password) => {
  cy.visit('https://demo.nopcommerce.com/register')
  cy.get('#FirstName').type(firstName)
  cy.get('#LastName').type(lastName)
  cy.get('#Email')
  cy.get('#Password').type(password)
  cy.get('#ConfirmPassword').type(password)
  cy.get('#register-button').click()
  cy.get('.field-validation-error').contains('Email is required.')
})

Cypress.Commands.add('register_email_existing', (firstName, lastName, email, password) => {
  cy.visit('https://demo.nopcommerce.com/register')
  cy.get('#FirstName').type(firstName)
  cy.get('#LastName').type(lastName)
  cy.get('#Email').type(email)
  cy.get('#Password').type(password)
  cy.get('#ConfirmPassword').type(password)
  cy.get('#register-button').click()
  cy.contains('The specified email already exists')
})

Cypress.Commands.add('register_password_empty', (firstName, lastName, email) => {
  cy.visit('https://demo.nopcommerce.com/register')
  cy.get('#FirstName').type(lastName)
  cy.get('#LastName').type(firstName)
  cy.get('#Email').type(email)
  cy.get('#Password')
  cy.get('#ConfirmPassword')
  cy.get('#register-button').click()
  cy.get('.field-validation-error').contains('Password is required.')
})

Cypress.Commands.add('register_password_different', (firstName, lastName, email, password, passwordDifferent) => {
  cy.visit('https://demo.nopcommerce.com/register')
  cy.get('#FirstName').type(firstName)
  cy.get('#LastName').type(lastName)
  cy.get('#Email').type(email)
  cy.get('#Password').type(password)
  cy.get('#ConfirmPassword').type(passwordDifferent)
  cy.get('#register-button').click()
  cy.get('.field-validation-error').contains('The password and confirmation password do not match.')
})

Cypress.Commands.add('register_password_small', (firtName, lastName, email, password) => {
  cy.visit('https://demo.nopcommerce.com/register')
  cy.get('#FirstName').type(firtName)
  cy.get('#LastName').type(lastName)
  cy.get('#Email').type(email)
  cy.get('#Password').type(password)
  cy.get('#ConfirmPassword').type(password)
  cy.get('#register-button').click()
  cy.get('.field-validation-error').contains('Password must meet the following rules: must have at least 6 characters')
})

Cypress.Commands.add('alterar_usuario', (fullName, email, password) => {
  cy.request({
    method: 'PUT',
    url: 'https://serverest.dev/usuarios/5NIfaZC6DqOOJFbp',
    body: {
      "nome": fullName,
      "email": email,
      "password": password,
      "administrador": "false"
    }
  }).then((resultado) => {
    expect(resultado.status).to.equal(200)
    expect(resultado.status).to.exist
    expect(resultado.body.message).to.equals('Registro alterado com sucesso')
  })
})

Cypress.Commands.add('cadastrar_usuario', (fullName, email, password) => {
  cy.request({
    method: 'POST',
    url: 'https://serverest.dev/usuarios',
    body: {
      "nome": fullName,
      "email": email,
      "password": password,
      "administrador": "false"
    }
  }).then((resultado) => {
    expect(resultado.status).to.equal(201)
    expect(resultado.status).to.exist
    expect(resultado.body.message).to.equals('Cadastro realizado com sucesso')
  })
})