/// <reference types="Cypress" />

Cypress.Commands.add('listarPeds', () => {
    cy.request({
        method: 'GET',
        url: 'https://enderecoapi/workschedule/v1/peds'
    })
})

Cypress.Commands.add('criarPed', (titulo, categorias, gestor, colaboradores) => {
    cy.request({
        method: 'POST',
        url: 'https://enderecoapi/workschedule/v1/peds',
        body: {
            "titulo": titulo,
            "categorias": categorias,
            "idGestor": gestor,
            "colaboradores": colaboradores
        },
        failOnStatusCode: false
    })
})
