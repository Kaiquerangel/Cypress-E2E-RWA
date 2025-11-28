/// <reference types="cypress" />

const credencias = require('../../credenciais.json')

describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('/login');
    });

    it.only('Deve fazer login com um usuário válido', () => {
    cy.get('#username').type(credencias.login.username);
    cy.get('#password').type(credencias.login.password);
    cy.get('button[type="submit"]').click();
    cy.get('[data-test="main"]').should('be.visible');
    cy.get('[data-test="sidenav"] > .MuiPaper-root').should('be.visible');
    cy.get('[data-test="nav-contacts-tab"]').click();
    cy.get('[data-test="nav-personal-tab"]').click();
    cy.get('[data-test="nav-personal-tab"]').click();
    cy.get('[data-test="sidenav-notifications"]').click();  
    });

    it('Deve exibir mensagem de erro para credencias inválidas', () => {
    //cy.get('#username').type(credencias.login.username);
    //cy.get('#password').type(credencias.login.password);
    cy.get('#username').type('Kaique');
    cy.get('#password').type('s2cret');
    cy.get('button[type="submit"]').click();
    cy.get('.MuiAlert-message').should('be.visible');
    cy.get('.MuiAlert-message').should('contain', 'Username or password is invalid');
    

     });
});