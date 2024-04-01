/// <reference types="cypress"/>

describe('Deletar usuário', () => {
  it('Deletar usuário com sucesso', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://serverest.dev/usuarios/Bi46ivwwFyHfRDo6',
    }).then((resultado) => {
      expect(resultado.status).to.equal(200)
      expect(resultado.status).to.exist
      expect(resultado.body.message).to.equals('Registro excluído com sucesso')
    })
  })
})