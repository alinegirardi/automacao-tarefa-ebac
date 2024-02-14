///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  it('Deve realizar o login com sucesso', () => {
    cy.get('#username').type()
    cy.get('#password').type()
    cy.get('.woocommerce-form > .button')
  })

  it('Deve aparecer mensagem de erro com email inválido', () => {
    cy.get('#username').type()
    cy.get('#password').type()
    cy.get('.woocommerce-form > .button')
  })

  it('Deve aparecer mensagem de erro com senha incorreta', () => {
    cy.get('#username').type()
    cy.get('#password').type()
    cy.get('.woocommerce-form > .button')
  })

})