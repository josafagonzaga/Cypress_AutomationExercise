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

	describe.skip('Validar a tela home', () => {
		it.skip('', () => {


			/*
				1. Launch browser
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
	});

	describe('Validar acesso a tela de cadastro', () => {
		it('Clicar no botão Signup/Login', () => {
			cy.visit("https://automationexercise.com/")
			cy.get('.shop-menu > .nav > :nth-child(4) > a') //clica no signup/login
				.click()
			cy.get(".signup-form > h2")
				.should("have.text", "New User Signup!")
				.and("be.visible")
		})
	})

	describe.only('Validar formulario de cadastro', () => {


		//1. Launch browser
		//2. Navigate to url 'http://automationexercise.com'
		//3. Verify that home page is visible successfully
		beforeEach(() => {
			cy.visit("https://automationexercise.com/")
			cy.get('.shop-menu > .nav > :nth-child(4) > a') //clica no signup/login
				.click()
			cy.get(".signup-form > h2")
		})

		//4. Click on 'Signup / Login' button	
		it.skip('Clicar no botão Signup/Login', () => {

			cy.get('.shop-menu > .nav > :nth-child(4) > a')
				.click()
		});

		//5. Verify 'New User Signup!' is visible
		it.skip('Verificar se New User Signup! esta visivel ', () => {
			cy.get(".signup-form > h2")
				.should("have.text", "New User Signup!")
				.and("be.visible")
		});

		//6. Enter name
		it.skip('Digitar o nome', () => {
			cy.get('[data-qa="signup-name"]')
				.type(randomName)
		});

		//6. Enter email address
		it.skip('Digitar o email', () => {
			
			cy.get('[data-qa="signup-email"]')
				.type(randomMail)
		});

		//7. Click 'Signup' button
		it.skip('Clicar no botão "Signup"', () => {
			cy.get('[data-qa="signup-button"]')
				.click()
		});

		//8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
		it.skip('Validar que ENTER ACCOUNT INFORMATION está visivel', () => {
			cy.get(':nth-child(1) > b')
				.should('have.text', 'Enter Account Information')
				.and('be.visible')
		});

		//9. Fill details: Title, Name, Email, Password, Date of birth
		it.skip('Validar informações da conta', () => {
			cy.get('#id_gender1')
				.check()

			cy.get('[data-qa="password"]')
				.type('123456')

			cy.get('[data-qa="days"]')
				.select('1')

			cy.get('[data-qa="months"]')
				.select('May')

			cy.get('[data-qa="years"]')
				.select('1990')
		});

		it.skip('Com sucesso', () => {




			//clicka no botao signup


			//verificar se o texte abaixo está visivel	
			//cy.get('.text-center > b')
			//.eq(0)


			//Preecher os campos Title, Name, Email, Password, Date of birth


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
				.should('have.text', 'Account Created!')
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
				.should('have.text', 'Account Deleted!')
				.and('be.visible')

			cy.get('[data-qa="continue-button"]')
				.click()
		});
		it('Preenchimento completo - Com sucesso', () => {

			cy.get('[data-qa="signup-name"]')
				.type(randomName)
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
				.should('have.text', 'Account Created!')
				.and('be.visible')

			//15. Click 'Continue' button
			cy.get('[data-qa="continue-button"]')
				.click()

			//16. Verify that 'Logged in as username' is visible
			cy.get(':nth-child(10) > a')
				.should('contain', ' Logged in as ')
				.and('be.visible')

			//17. Click 'Delete Account' button
			cy.get('.shop-menu > .nav > :nth-child(5) > a')
				.click()

			//18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
			cy.get('b')
				.should('have.text', 'Account Deleted!')
				.and('be.visible')

			cy.get('[data-qa="continue-button"]')
				.click()
		});
	});
});