
/// <reference types="cypress"/> 



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

        var cenario = 1
        var teste = 1
        

    describe(`${cenario} - Validação de acesso a tela de cadastro.`, () => {
        
        var complemento = 1

        beforeEach(() => {
            cy.VisitaTelaCadastro()
        })

        it(`${teste}.${complemento} - Validar se a tela de cadastro está sendo apresentada.`, () => {
            cy.get('.signup-form > h2')
                .should('have.text', 'New User Signup!')
                .and('be.visible')
        });

        it(`${teste}.${++complemento} - Validar campos vazios.`, () => {
            cy.get('[data-qa="signup-button"]')
                .click()

            cy.get('[data-qa="signup-name"]').then(($input) => {
                expect($input[0].checkValidity()).to.be.false
                expect($input[0].validationMessage).to.contain('')
            })
        });

        it(`${teste}.${++complemento} - Validar Email incompleto sem @.`, () => {
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

        it(`${teste}.${++complemento} - Validar Email incompleto com @.`, () => {
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

        it(`${teste}.${++complemento} - Validar Dados validos'`, () => {
            cy.LoginNovoUsuario()
        });
    })
    
     describe(`${++cenario} - Validação de acesso a tela de cadastro.`, () => {
        var complemento = 1
        beforeEach(() => {
            cy.VisitaTelaCadastro()
        })

        it(`${teste}.${complemento} - Validar se a tela de cadastro está sendo apresentada.`, () => {
            cy.get('.signup-form > h2')
                .should('have.text', 'New User Signup!')
                .and('be.visible')
        });

        it(`${teste}.${++complemento} - Validar campos vazios.`, () => {
            cy.get('[data-qa="signup-button"]')
                .click()

            cy.get('[data-qa="signup-name"]').then(($input) => {
                expect($input[0].checkValidity()).to.be.false
                expect($input[0].validationMessage).to.contain('')
            })
        });

        it(`${teste}.${++complemento} - Validar Email incompleto sem @.`, () => {
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

        it(`${teste}.${++complemento} - Validar Email incompleto com @.`, () => {
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

        it(`${teste}.${++complemento} - Validar Dados validos'`, () => {
            cy.LoginNovoUsuario()
        });
    })

    describe(`${++cenario} - Validação de acesso a tela de cadastro.`, () => {
        var complemento = 1
        beforeEach(() => {
            cy.VisitaTelaCadastro()
        })

        it(`${teste}.${complemento} - Validar se a tela de cadastro está sendo apresentada.`, () => {
            cy.get('.signup-form > h2')
                .should('have.text', 'New User Signup!')
                .and('be.visible')
        });

        it(`${teste}.${++complemento} - Validar campos vazios.`, () => {
            cy.get('[data-qa="signup-button"]')
                .click()

            cy.get('[data-qa="signup-name"]').then(($input) => {
                expect($input[0].checkValidity()).to.be.false
                expect($input[0].validationMessage).to.contain('')
            })
        });

        it(`${teste}.${++complemento} - Validar Email incompleto sem @.`, () => {
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

        it(`${teste}.${++complemento} - Validar Email incompleto com @.`, () => {
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

        it(`${teste}.${++complemento} - Validar Dados validos'`, () => {
            cy.LoginNovoUsuario()
        });
    })

});