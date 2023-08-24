/// <reference types="cypress" />

export default {
    acessLogin () {
        cy.visit('/')
            .get('.top_header_left')
           
        cy.get('.fa-user')
            .click()
    }

}