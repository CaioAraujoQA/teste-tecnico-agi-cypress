// cypress/e2e/agiBlogPage.js

class agiBlogPage {

    acessarPagina() {
        cy.visit('https://blog.agibank.com.br/').wait(3000)



    }

    selecionarLupa() {
        cy.get('.astra-search-icon')
            .should('be.visible')
            .click({ force: true })
        cy.get('#search-field')
            .invoke('attr', 'tabindex', '0')


        //cy.get('body').then(($body) => {

        //if ($body.find('.ast-icon > .ahfb-svg-iconset > svg').length) {
        //cy.get('.ast-icon > .ahfb-svg-iconset > svg').click()
        //} else {
        //cy.get('.ast-icon > .ahfb-svg-iconset').click()
        //  }

        //})
        //cy.get('.ast-icon > .ahfb-svg-iconset, .ast-icon > .ahfb-svg-iconset > svg')
        //.first()
        //  .click()
        //  cy.get('#search-field', { timeout: 10000 })
        //    .should('be.visible')

    }



    digitarBusca() {
        cy.get('#search-field', { timeout: 10000 })
            .should('be.visible')
            .type('Taxa de juros{enter}', { force: true })

        //cy.get('#search-field').type('Taxa de juros')
        //cy.get('#search-field').type('{enter}')

    }

    validarResultadoBusca() {
        cy.get('article')
            .its('length')
            .should('be.greaterThan', 0)


    }

    selecionarPrimeiroResultado() {
        cy.get('article')
            .should('have.length.greaterThan', 0)
            .first()
            .find('a')
            .first()
            .click()
    }

    validarConteudoArtigo() {
        cy.get('h1')
            .should('be.visible')
        cy.url().should('include', '/')
    }

    digitarBuscaInexistente() {
        cy.get('#search-field').type('Teste1234')
        cy.get('#search-field').type('{enter}')

    }

    validarResultadoVazio() {
        cy.get('article').should('have.length', 0)
        cy.url().should('include', '?s=')

    }

    buscarComEnter() {
        cy.get('#search-field').type('{enter}')

    }





}



export default new agiBlogPage();