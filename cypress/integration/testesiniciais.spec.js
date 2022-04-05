/// <reference types="cypress"/>

describe('Visitar site', () => {

    it('Visitando conteúdo do site Unifor', () => {
        cy.visit("www.unifor.br")
        cy.get('.menu__main__bar > .menu__list > :nth-child(5) > .menu__link').should('be.visible')
        cy.get('[class="sub-menu sub-menu--dropdown hidden-sm hidden-xs"]').should('be.visible').click()
            cy.get('[class="sub-menu__link"]')
                cy.find('[class="sub-menu__item"]').contains('Graduação - Inscrições 2022.1').click()
        
    });



})


