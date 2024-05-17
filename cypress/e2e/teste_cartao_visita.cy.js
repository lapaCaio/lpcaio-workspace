
describe('Verificação da Página', () => {

	beforeEach('Entrar na Home', () => {
		cy.visit('/')
	})

	it('TC001 - verificação da página home', () => {
		// cy.get('.container').should('contain', '.circle')

		cy.get('h2')
			.should('contain', "Catterina Vittorazzi Salvador")

		cy.get('p')
			.should('contain', 'Trainee')

		// cy.get(':nth-child(1) > .col > .card > a.ng-tns-c2007924471-1 > .card-content').should('contain', '.ng-tns-c2007924471-1')
		for (let i = 1; i <= 6; i++) {
			cy.get(':nth-child(' + i + ') > .col > .card > a.ng-tns-c2007924471-1 > .card-content')
				.should('be.visible')
		}
	})

	it('TC002 - verificação da página email', () => {
		cy.get(':nth-child(1) > .col > .card > a.ng-tns-c2007924471-1 > .card-content').click()

		for (let i = 1; i <= 3; i++) {
			// cy.get('.contact-form > :nth-child('+ i +')').should('be.visible')
			cy.get('.contact-form > :nth-child(' + i + ')')
				.and('be.visible')
				.and('not.have.attr', 'readonly');
		}

		// for(let i = 1; i <= 50; i++){
			cy.get(':nth-child(1) > .ng-untouched').type('Teste de Automação ')
			cy.get('.contact-form > :nth-child(2) > .ng-untouched').type('teste@auto.com')
			// cy.get(':nth-child(3) > .ng-untouched').type('Lorem ipsum fia!')
			cy.quantidadeCaracteres(':nth-child(3) > .ng-untouched', 10)

			cy.wait(1000)

			cy.get('[type="submit"]').click()

			// cy.wait(1000)
		// }
		
	})

	it.skip('TC004 - verificação da página instagram', () => {
		cy.get(':nth-child(3) > .col > .card > a.ng-tns-c2007924471-1 > .card-content').click()
		cy.url().should('eq', 'https://www.instagram.com/catterinasalvador/')
	})

	it('TC003 - verificação da página surprise', () => {
		cy.get(':nth-child(6) > .col > .card > a.ng-tns-c2007924471-1 > .card-content').click();

	})
})
