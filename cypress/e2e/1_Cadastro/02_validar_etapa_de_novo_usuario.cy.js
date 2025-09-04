/// <reference types="cypress"/> 



context('Tela cadastro novo usuario', () => {

    describe('', () => {
        
        beforeEach(() => {
            cy.VisitaTelaCadastro()
            cy.LoginNovoUsuario()

        })

        it('Validar se a tela de cadastro está sendo apresentada', () => {
            cy.get(':nth-child(1) > b')
                .should('have.text', 'Enter Account Information')
                .and('be.visible')
        });

        //1	Não selecionar nenhum título (Mr/Mrs)	Negativo	Mensagem de erro de campo obrigatório
        //2	Selecionar título Mr	Positivo	Campo aceito sem erro
        
        
    })
});









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