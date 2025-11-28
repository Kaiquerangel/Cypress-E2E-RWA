/// <reference types="cypress" />

const Chance = require('chance');
const chance = new Chance();

const firstName = chance.first();
const lastName = chance.last();
const username = chance.string({ length: 8, pool: 'abcdefghijklmnopqrstuvwxyz' });
const password = chance.string({ length: 10 }) + "1!";
const bankName = chance.company();
const routingNumber = chance.string({ length: 9, pool: '0123456789' });
const accountNumber = chance.string({ length: 9, pool: '0123456789' });
const email = chance.email();
const phoneNumber = chance.phone({ formatted: false });

describe("Registro de usuário", () => {
    
beforeEach(() => {
        cy.visit('/signup');
});
    it("Deve registrar um novo usuário com sucesso", () => {
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastName);
        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('#confirmPassword').type(password);
        cy.get('[data-test="signup-submit"]').click();

        cy.get('#username').should('be.visible');

        cy.get('#username').type(username);
        cy.get('#password').type(password);
        cy.get('button[type="submit"]').click();
        cy.get('.css-1idn90j-MuiGrid-root').should('be.visible');
        cy.get('[data-test="user-onboarding-next"]').click();
        cy.get('#bankaccount-bankName-input').type(bankName);
        cy.get('#bankaccount-routingNumber-input').type(routingNumber);
        cy.get('#bankaccount-accountNumber-input').type(accountNumber);
        cy.get('[data-test="bankaccount-submit"]').click();
        cy.get('[data-test="user-onboarding-next"]').click();
        cy.get('[data-test="sidenav-user-settings"]').click();
        cy.get('[data-test="user-settings-email-input"]').type(email);
        cy.get('[data-test="user-settings-phoneNumber-input"]').type(phoneNumber);
        cy.get('[data-test="user-settings-submit"]').click();
        cy.get('[data-test="sidenav-notifications"]').click();
    });

});