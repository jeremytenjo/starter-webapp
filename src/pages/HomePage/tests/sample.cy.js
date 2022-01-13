// https://docs.cypress.io/guides/core-concepts/retry-ability
describe('My First Test', () => {
  it('Visits Homepage', () => {
    // visit is automatically prefixed with `baseUrl`
    cy.visit('/')
    cy.get('h1').should('contain', 'Home Page')
  })
})
