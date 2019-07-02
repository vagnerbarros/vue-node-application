const getStore = () => cy.window().its('app.$store');

let clientData = {
  firstName: 'Anron',
  lastName: 'Sistemas',
  adress: 'Av. Ag. Magalhães',
  city: 'Caruaru',
  state: 'PE'
}

describe('Test Client', () => {

  before(() => {
    cy.removeclients();
  })

  it('Save a new client', () => {

    cy.login();
    cy.visit('#/home')
    cy.get('.v-list__group').click();
    cy.get('.v-list__group__items > [role="listitem"] > .v-list__tile > .v-list__tile__content').click();
    cy.url().should('include', '/clients');
    cy.get('.v-toolbar__content > .v-btn > .v-btn__content').click();
    cy.get('[data-cy=firstName]').type(clientData.firstName);
    cy.get('[data-cy=lastName]').type(clientData.lastName);
    cy.get('[data-cy=adress]').type(clientData.adress);
    cy.get('[data-cy=city]').type(clientData.city);
    cy.get('[data-cy=state]').type(clientData.state);
    cy.get('[data-cy=save]').click();

    getStore().its('state.client.clients').should('have.length', 1);
    getStore().then((store) => {
      let client = store.state.client.clients[0];
      for(let key in clientData){
        expect(client[key]).to.equal(clientData[key]);
      }
    });
  });

  it('Edit client', () => {

    clientData.firstName = 'Anron';
    clientData.lastName = 'Software';
    clientData.adress = 'Endereço de Santa Cruz';
    clientData.city = 'Santa Cruz do Capibaribe';
    clientData.state = 'PE2'
    
    cy.login();
    cy.visit('#/home')
    cy.get('.v-list__group').click();
    cy.get('.v-list__group__items > [role="listitem"] > .v-list__tile > .v-list__tile__content').click();
    cy.url().should('include', '/clients');
    cy.get(':nth-child(1) > .justify-center > [data-cy=edit]').click();
    cy.get('[data-cy=firstName]').clear().type(clientData.firstName);
    cy.get('[data-cy=lastName]').clear().type(clientData.lastName);
    cy.get('[data-cy=adress]').clear().type(clientData.adress);
    cy.get('[data-cy=city]').clear().type(clientData.city);
    cy.get('[data-cy=state]').clear().type(clientData.state);
    cy.get('[data-cy=save]').click();

    getStore().then((store) => {
      let client = store.state.client.clients[0];
      for(let key in clientData){
        expect(client[key]).to.equal(clientData[key])
      }
    });
  });
  
  it('Remove client', () => {
    
    cy.login();
    cy.visit('#/home');
    cy.get('.v-list__group').click();
    cy.get('.v-list__group__items > [role="listitem"] > .v-list__tile > .v-list__tile__content').click();
    cy.url().should('include', '/clients');
    cy.get(':nth-child(1) > .justify-center > [data-cy=remove]').click();
    cy.get('[data-cy=confirm]').click();

    getStore().its('state.client.clients').should('have.length', 0);
  });
})
  