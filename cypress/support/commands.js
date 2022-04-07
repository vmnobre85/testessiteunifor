/// <reference types="cypress" />



Cypress.Commands.add('login', (email, password) => { 
    cy.request({
        url: 'https://preprod-guanabara-customer-api-smartbus.oreons.com//api/CustomerAuth/Login',
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body:{ 
            "user": {"Email": email, "Password": password}}
    }).then(resp =>{
        resp.headers['set-cookie'].forEach(cookie =>{
            const firstpart = cookie.split(';')[0]
            const divisor = firstpart.indexOf('=')
            const key = firstpart.substring(0, divisor)
            const value = firstpart.substring(divisor+1)
            cy.setCookie(key, value)
        })

    })
    cy.visit('https://preprod-guanabara-ecommerce-smartbus.oreons.com/login')
 })