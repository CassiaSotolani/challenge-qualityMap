/// <reference types="cypress"/>

describe('Buscar usuários', () => {
  it('Buscar todos os usuários', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios'
    }).then((resultado) => {
      expect(resultado.status).to.equal(200)
      expect(resultado.status).to.exist
    })
  })

  it('Buscar usuário específico válido', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios/5NIfaZC6DqOOJFbp'
    }).then((resultado) => {
      expect(resultado.status).to.equal(200)
      expect(resultado.status).to.exist
    })
  })
})