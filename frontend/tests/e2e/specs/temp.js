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