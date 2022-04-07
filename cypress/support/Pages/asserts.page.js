/// <reference types="cypress" />
class validacaoAssertiva{

    validacaologin(element, message){
        cy.get(element).should('be.visible')
        cy.get(element).contains(message)
    }
}

module.exports = new validacaoAssertiva()


//app-customer-menu .main-header-link '#matriculaUsuario'