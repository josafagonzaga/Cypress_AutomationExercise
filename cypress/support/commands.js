// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { faker } from '@faker-js/faker';


const randomName = faker.person.firstName();
const randomMail = faker.internet.email();

Cypress.Commands.add('VisitaTelaCadastro', () => {
    cy.visit('https://automationexercise.com/')

    cy.get('.shop-menu > .nav > :nth-child(4) > a')
        .click()
})

Cypress.Commands.add('VisitaTelaCadastro', () => {
    cy.visit('https://automationexercise.com/')

    cy.get('.shop-menu > .nav > :nth-child(4) > a')
        .click()
})

Cypress.Commands.add('LoginNovoUsuario', () => {
    cy.get('[data-qa="signup-name"]')
                .type(randomMail)

            cy.get('[data-qa="signup-email"]')
                .type(randomMail)

            cy.get('[data-qa="signup-button"]')
                .click()
})