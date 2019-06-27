// https://docs.cypress.io/api/introduction/api.html

describe('Test the login page', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.get('input[name=email]').type('vagner@gmail.com')
    cy.get('input[name=password]').type(`123{enter}`)
  })
})
