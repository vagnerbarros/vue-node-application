// https://docs.cypress.io/api/introduction/api.html

describe('Test the login page', () => {
    
    it('Save a new client', () => {

      cy.visit('/');
      cy.get('input[aria-label=E-Mail]').type('vagner@gmail.com');
      cy.get('input[aria-label=Password]').type('123');
      cy.get('button').click();
      cy.url().should('include', '/home');
      cy.get('.v-list__group').click();
      cy.get('.v-list__group__items > [role="listitem"] > .v-list__tile > .v-list__tile__content').click();
      cy.url().should('include', '/clients');
      cy.get('.v-toolbar__content > .v-btn > .v-btn__content').click();
      cy.get('[data-cy=firstName]').type('Anron');
      cy.get('[data-cy=lastName]').type('Software');
      cy.get('[data-cy=adress]').type('Av. Ag. Magalhães');
      cy.get('[data-cy=city]').type('Caruaru');
      cy.get('[data-cy=state]').type('PE');
      cy.get('[data-cy=save]').click();
    })
  })
  
  // describe('New Test Suit', () => {
  //   it('Test 1', () => {
  
  //     // Find the el with id 'some-link'
  //     cy.get('#some-link')
  //     .then(($myElement) => {
  //       // ...massage the subject with some arbitrary code
  //       // grab its href property
  //       const href = $myElement.prop('href')
  
  //       // strip out the 'hash' character and everything after it
  //       return href.replace(/(#.*)/); 
  //     })
  //     .then((href) => {
  //       // href is now the new subject
  //       // which we can work with now
  //     })
  //   })
  
  //   it('Test 2', () => {
  //     cy.get('.my-selector').as('myElement').click();
      
  //     // many more actions
  
  //     cy.get('@myElement').click();
  //   })
  // })
  