// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('span', 'Vuetify')
    cy.contains('span', 'MATERIAL DESIGN')
    cy.contains('span', 'Latest Release')
  })
})
