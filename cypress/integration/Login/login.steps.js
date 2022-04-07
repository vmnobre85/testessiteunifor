/// <reference types="cypress" />
import {Given, When, Then, And} from 'cypress-cucumber-preprocessor/steps'
const { uniforOnline, validacaoAssertiva } = require('../../support/pages')

Given('Que acesso a página do Unifor Online', ()=>{
    cy.visit('', {failOnStatusCode: false})
})

When('Preencho o usuário {string} e o password {string}', (user, password)=>{
    uniforOnline.login(user, password)
})

Then('Verifico se o elemento {string} contém a o valor {string}', (element, message)=>{
    validacaoAssertiva.validacaologin(element, message)
})
    


