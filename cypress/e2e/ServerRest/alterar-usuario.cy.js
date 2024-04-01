/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'

describe('Alterar usuário', () => {
  it('Alterar usuário com sucesso', () => {

    cy.alterar_usuario(faker.person.fullName(), faker.internet.email(), faker.internet.password(8))
    
  })
})