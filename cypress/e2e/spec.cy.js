/// <reference types="cypress"/> 
// sempre utilizar esse comando pra codigo saber que estou utilizando cypress

/*
  context = tela
  describle = cenário
  it = teste


  Prioridades de mapeamento
	- id = #
	- class = .
	- xpath = //
	- propriedade = [placeholder=''] - a propriedade é o que esta dentro do []
	- atributo = [placeholder='nome'] - o atributo é o que está dentro das ''
	- todo objeto tem uma propriedade que pode ter ou nao atributo


*/


context('Tela de cadastro', () => {
	describe('Validar acesso a tela', () =>
	{
		it('Com sucesso', () => {
			cy.visit("https://automationexercise.com/")

   			cy.get('.shop-menu > .nav > :nth-child(4) > a')
				.click()

			cy.get(".signup-form > h2")
				.should("have.text", "New User Signup!")
				.and("be.visible")

			/*cy.get('//*[@id="form"]/div/div/div[3]/div/h2')
				.should("have.text", "New User Signup!")
				.and("be.visible")

			cy.get("//*[@id='form']/div/div/div[3]/div/h2")
				.should("have.text", "New User Signup!")
				.and("be.visible")*/

			
		});
  	});
  
	describe('Sem sucesso', () => {
		
	
	});
});

//*[@id="form"]/div/div/div[3]/div/form/button