/// <reference types="cypress" />

class uniforOnline{

    login(user, password){
        cy.get('#matricula').type(user)
        cy.get('#senha').type(password)
        cy.get('.hidden-xs').click()
        cy.wait(1000)
    }

    menumatricula(){
        cy.get('#F325A234B9A36').click()
        cy.wait(1000)
        cy.get('#MAT_TELA_ALUNO').click()
    }

}

module.exports = new uniforOnline()