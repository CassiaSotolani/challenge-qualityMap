/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'

describe('Validar mensagens de erro durante o registro e login', () => {
  it('Mensagem de erro ao realizar login', () => {

    cy.login_error(faker.internet.email(), faker.internet.password(6))

  })

  it('Mensagem de erro ao realizar um novo registro com First name vazio', () => {

    cy.register_firstName_empty(faker.person.lastName(), faker.internet.email(), faker.internet.password(6))

  })

  it('Mensagem de erro ao realizar um novo registro com Last name vazio', () => {
    
    cy.register_lastName_empty(faker.person.firstName(), faker.internet.email(), faker.internet.password(6))

  })

  it('Mensagem de erro ao realizar um novo registro com Email vazio', () => {

    cy.register_email_empty(faker.person.firstName(), faker.person.lastName(), faker.internet.password(6))

  })

  it('Mensagem de erro ao realizar um novo registro com Email existente', () => {

    const email = 'teste.cassia@teste.com';
    cy.register_email_existing(faker.person.firstName(), faker.person.lastName(), email, faker.internet.password(6))

  })

  it('Mensagem de erro ao realizar um novo registro com Password vazia', () => {

    cy.register_password_empty(faker.person.lastName(), faker.person.lastName(), faker.internet.email())

  })

  it('Mensagem de erro ao realizar um novo registro com Password diferente', () => {

    cy.register_password_different(faker.person.lastName(), faker.person.lastName(), faker.internet.email(), faker.internet.password(6), faker.internet.password(6))

  })

  it('Mensagem de erro ao realizar um novo registro com Password pequena', () => {

    cy.register_password_small(faker.person.lastName(), faker.person.lastName(), faker.internet.email(), faker.internet.password(5))

  })
})