describe('Test the login page', () => {
  it('Login', () => {
    cy.visit('/');
    cy.get('input[aria-label=E-Mail]').type('vagner@gmail.com');
    cy.get('input[aria-label=Password]').type('123');
    cy.get('button').click();
    cy.url().should('include', '/home');
  })
});