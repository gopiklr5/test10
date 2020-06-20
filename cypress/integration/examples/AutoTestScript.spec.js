/// <reference types="cypress" />


describe('suitename - cypress hooks', () => {




    it('visit App - first test script', () => {

        cy.visit('http://eaapp.somee.com/');
      //  cy.get('a').contains('Login').click();
        cy.get('label').contains('Password').should('be.visible');
        cy.get('input[name="UserName"]').type('admin').should('be.visible');
        cy.get('input[name="UserName"]').type('admin');
        cy.get('input[name="Password"]').type('password');
        cy.get('input[value="Log in"]').click();

    })
})




