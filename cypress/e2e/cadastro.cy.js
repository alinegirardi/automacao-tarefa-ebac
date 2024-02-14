///<reference types="cypress"/>

describe('Funcionalidade: Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')  
    });

    it('Deve realizar o cadastro com sucesso', () => {
        
        cy.get('#username').type()
        cy.get('#password').type()
        cy.get(':nth-child(4) > .button')
    });
});