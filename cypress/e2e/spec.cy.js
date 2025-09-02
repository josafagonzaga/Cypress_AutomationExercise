/// <reference types="cypress"/> 

 import { faker } from '@faker-js/faker';

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

	const randomName = faker.person.firstName();
	const randomMail = faker.internet.email();

	it.skip('', () => {
			/*
				. Launch browser
				2. Navigate to url 'http://automationexercise.com'
				3. Verify that home page is visible successfully

				ai, você cria um comando, sem as asserções
					somente com os passos

					que são somente com estes comandos:

					cy.visit("https://automationexercise.com/")
					cy.get('.shop-menu > .nav > :nth-child(4) > a') //clica no signup/login
						.click()
					cy.get(".signup-form > h2")
			*/
		});
	describe('Validar acesso a tela', () =>
	{

		beforeEach (() => 
		{

		})

		it.skip('Com sucesso', () => {
			cy.visit("https://automationexercise.com/")

			cy.get('.shop-menu > .nav > :nth-child(4) > a') //clica no signup/login
				.click()

			cy.url('https://automationexercise.com/login')

			//valida se tem o elemento  "New User Signup!"	
			cy.get(".signup-form > h2") 
				.should("have.text", "New User Signup!")
				.and("be.visible")

			//preenchimento do login	
			cy.get('[data-qa="signup-name"]') 
				.type('Roberval')

			//preenchimento do email DUVIDA: Tem como gerar um email automatico toda vez q rodar o teste?
			cy.get('[data-qa="signup-email"]') 
				.type('natalya6578@uorak.com')

			//clicka no botao signup
			cy.get('[data-qa="signup-button"]') 
				.click()

			//verificar se o texte abaixo está visivel	
			//cy.get('.text-center > b')
				//.eq(0)
			cy.get(':nth-child(1) > b') 
				.should('have.text', 'Enter Account Information')
				.and('be.visible')

			//Preecher os campos Title, Name, Email, Password, Date of birth
			cy.get('#id_gender1')
				.check() //fiquei com duvida no mapeamento aqui. 
			
			cy.get('[data-qa="password"]')
				.type('123456')

			cy.get('[data-qa="days"]')
				.select('1')

			cy.get('[data-qa="months"]')
				.select('May')

			cy.get('[data-qa="years"]')
			.select('1990')

			//10. escolher checkbox 'Sign up for our newsletter!'
			cy.get('[name="newsletter"]')
				.check()

			//Select checkbox 'Receive special offers from our partners!'
			cy.get('[name="optin"]')
				.check()
				
			//preencher os campos: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
			cy.get('[data-qa="first_name"]')
				.type('Roberval')

			cy.get('[data-qa="last_name"]')
				.type('Silva')

			cy.get('[data-qa="company"]')
				.type('Metal')

			cy.get('[data-qa="address"]')
				.type('Do QA, nr 1036')

			cy.get('[data-qa="address2"]')
				.type('Do Teste, nr 2109')

			cy.get('[data-qa="country"]')
				.select('New Zealand')

			cy.get('[data-qa="state"]')
				.type('Auckland')

			cy.get('[data-qa="city"]')
				.type('Auckland')

			cy.get('[data-qa="zipcode"]')
				.type('1010')

			cy.get('[data-qa="mobile_number"]')
				.type('34988221980')

			//13. Click 'Create Account button'
			cy.get('[data-qa="create-account"]')
				.click()

			//14. Verify that 'ACCOUNT CREATED!' is visible
			//.text-center > b	
			cy.get('b') 
				.should('have.text','Account Created!')
				.and('be.visible')

			//15. Click 'Continue' button
			cy.get('[data-qa="continue-button"]')
				.click()

			//16. Verify that 'Logged in as username' is visible
			cy.get('b')
				.should('be.visible')

			//17. Click 'Delete Account' button
			//.navbar-nav > li > a .eq(4)
			cy.get('.shop-menu > .nav > :nth-child(5) > a')
				.click()

			//18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
			cy.get('b')
				.should('have.text','Account Deleted!')
				.and('be.visible')
			
			cy.get('[data-qa="continue-button"]')
				.click()


				

			
			

				


			

			

			
		});

		

		it.skip('', () => {
			
		});

		it.skip('Validar que a segunda parte do form não é visivel ou habilitado', () => {
			/*
				Qaudno clicar em login
				então isso não é visivel ou habilitado

				.login-form

				cy.get()
			.should('not.be.visible')
				
			*/
		});

		it.skip('', () => {
			
		});

		it.skip('', () => {
			
		});

		it('Com sucesso', () => {
			cy.visit("https://automationexercise.com/")

			cy.get('.shop-menu > .nav > :nth-child(4) > a') //clica no signup/login
				.click()

			//valida se tem o elemento  "New User Signup!"	
			cy.get(".signup-form > h2") 
				.should("have.text", "New User Signup!")
				.and("be.visible")

			//preenchimento do login	
			cy.get('[data-qa="signup-name"]') 
				.type(randomName)

			//preenchimento do email DUVIDA: Tem como gerar um email automatico toda vez q rodar o teste?
			cy.get('[data-qa="signup-email"]') 
				.type(randomMail)

			//clicka no botao signup
			cy.get('[data-qa="signup-button"]') 
				.click()

			//verificar se o texte abaixo está visivel	
			cy.get(':nth-child(1) > b') 
				.should('have.text', 'Enter Account Information')
				.and('be.visible')

			//Preecher os campos Title, Name, Email, Password, Date of birth
			cy.get('#id_gender1')
				.check() //fiquei com duvida no mapeamento aqui. 
			
			cy.get('[data-qa="password"]')
				.type('123456')

			cy.get('[data-qa="days"]')
				.select('1')

			cy.get('[data-qa="months"]')
				.select('May')

			cy.get('[data-qa="years"]')
			.select('1990')

			//10. escolher checkbox 'Sign up for our newsletter!'
			cy.get('[name="newsletter"]')
				.check()

			//Select checkbox 'Receive special offers from our partners!'
			cy.get('[name="optin"]')
				.check()
				
			//preencher os campos: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
			cy.get('[data-qa="first_name"]')
				.type('Roberval')

			cy.get('[data-qa="last_name"]')
				.type('Silva')

			cy.get('[data-qa="company"]')
				.type('Metal')

			cy.get('[data-qa="address"]')
				.type('Do QA, nr 1036')

			cy.get('[data-qa="address2"]')
				.type('Do Teste, nr 2109')

			cy.get('[data-qa="country"]')
				.select('New Zealand')

			cy.get('[data-qa="state"]')
				.type('Auckland')

			cy.get('[data-qa="city"]')
				.type('Auckland')

			cy.get('[data-qa="zipcode"]')
				.type('1010')

			cy.get('[data-qa="mobile_number"]')
				.type('34988221980')

			//13. Click 'Create Account button'
			cy.get('[data-qa="create-account"]')
				.click()

			//14. Verify that 'ACCOUNT CREATED!' is visible
				cy.get('b')
				.should('have.text','Account Created!')
				.and('be.visible')

			//15. Click 'Continue' button
			cy.get('[data-qa="continue-button"]')
				.click()

			//16. Verify that 'Logged in as username' is visible
			cy.get('b')
				.should('be.visible')
				.should('contain', 'Logged')

			//17. Click 'Delete Account' button
			cy.get('.shop-menu > .nav > :nth-child(5) > a')
				.click()

			//18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
			cy.get('b')
				.should('have.text','Account Deleted!')
				.and('be.visible')
			
			cy.get('[data-qa="continue-button"]')
				.click()
		});
  	});
  
	describe('Validar cadastro', () => {
		
	
	});
});

//*[@id="form"]/div/div/div[3]/div/form/button