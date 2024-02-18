///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  it('Deve realizar o login com sucesso', () => {
    cy.get('#username').type('aline.teste@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aline.teste')
  })

  it('Deve aparecer mensagem de erro com email inválido', () => {
    cy.get('#username').type('aline@teste.com.br')
    cy.get('#password').type('teste@123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
  })

  it('Deve aparecer mensagem de erro com senha incorreta', () => {
    cy.get('#username').type('aline.teste@teste.com.br')
    cy.get('#password').type('teste123')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error').should('contain','Erro: A senha fornecida para o e-mail aline.teste@teste.com.br está incorreta.')
  })

})