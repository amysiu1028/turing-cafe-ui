describe('Network Errors', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 500, 
      fixture: 'example',
    }).as('HomeErrorpage')
    cy.visit('http://localhost:3000/')
  })

  it('should give an error message for server is down', () => {
    //wait for intercept (404 error to complete)
    cy.wait('@HomeErrorpage')
    cy.get("[data-test='error']").contains('h2','Error: Failed to fetch data');
  });
})