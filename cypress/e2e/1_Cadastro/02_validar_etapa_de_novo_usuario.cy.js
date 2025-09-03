/// <reference types="cypress"/> 



describe('Validação de acesso a tela de cadastro', () => {
        beforeEach(() => {
            cy.VisitaTelaCadastro()

            
        })



/*
    describe - validar titulo
        its:
           visivel
           texto
           cor

    describe - validar nome
        its:
            placeholder
            input
            visivel
            entrada de dados
                vazio
                com número
                caracter especial
                2 carac
                3 carac
                20 carac


    describe - validar e-mail
        its:
            vazio
            1 carac 
            1 carac + @
            1 carac + @ + servidor
                Outros testes
            email existente
            email novo

    describe - botão
        clicar no botão sem preencher nada
        clicar no botão preenchendo somente nome
        clicar no botão preenchendo somente e-mail
        cor do botão
        texto do botão

*/