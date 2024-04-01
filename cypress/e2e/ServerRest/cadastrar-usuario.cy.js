/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'

describe('Cadastrar usuário', () => {
  it('Cadastrar usuário com sucesso', () => {
    
    cy.cadastrar_usuario(faker.person.fullName(), faker.internet.email(), faker.internet.password(8))

  })
})