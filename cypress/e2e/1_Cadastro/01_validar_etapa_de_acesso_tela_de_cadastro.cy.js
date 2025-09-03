/// <reference types="cypress"/> 

import { faker } from '@faker-js/faker';


/*
    acessar home
    clicar em cadastro
    acessar cadastro

    Possiveis casos de teste.
    1- Campos vazios
    2- email invalido incompleto com @
    3- email invalido incompleto sem o @
    4- dados válidos
    5 - validar se a tela inicial de casastro esta sendo apresentada. 
    
*/

context('Tela de cadastro', () => {

    const randomName = faker.person.firstName();
    const randomMail = faker.internet.email();

    describe('Validação de acesso a tela de cadastro', () => {
        beforeEach(() => {
            cy.VisitaTelaCadastro()

        })
        
        it('Validar se a tela de cadastro está sendo apresentada', () => {
            cy.get('.signup-form > h2')
                .should('have.text','New User Signup!')
                .and('be.visible')
        });

        it('campos vazios', () => {
            cy.get('[data-qa="signup-button"]')
                .click()

            cy.get('[data-qa="signup-name"]').then(($input) => {
                expect($input[0].checkValidity()).to.be.false
                expect($input[0].validationMessage).to.contain('')
            })
        });

        it('Email incompleto sem @', () => {
            cy.get('[data-qa="signup-email"]')
                .type('teste') // e-mail inválido

            // Tenta submeter o formulário
            cy.get('[data-qa="signup-button"]')
                .click()

            // Verifica se o campo de e-mail foi considerado inválido pelo navegador
            cy.get('[data-qa="signup-email"]').then(($input) => {
                expect($input[0].checkValidity()).to.be.false
                expect($input[0].validationMessage).to.contain('Inclua um "@" no endereço de e-mail.')
            })

        })

        it('Email incompleto com @', () => {
            cy.get('[data-qa="login-email"]')
                .type('asdf@') // e-mail inválido

            // Tenta submeter o formulário
            cy.get('[data-qa="signup-button"]')
                .click()

            // Verifica se o campo de e-mail foi considerado inválido pelo navegador
            cy.get('[data-qa="login-email"]').then(($input) => {
                expect($input[0].checkValidity()).to.be.false
                expect($input[0].validationMessage).to.contain('@')
            })

            // Verifica se ainda está na mesma página (opcional, caso tenha redirecionamento)
            cy.url().should('include', '/login')
        })

        it('Dados validos', () => {
            cy.LoginNovoUsuario()
        });
    })


});