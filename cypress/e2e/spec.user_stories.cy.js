describe('Visit main page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 200, 
      fixture: 'example',
    }).as('Homepage')
    cy.visit('http://localhost:3000/')
    cy.wait('@Homepage')
  })

  it('should display homepage with header and nine reservations on page load', () => {
    // cy.wait('@Homepage')
    cy.get('h1').contains('Turing Cafe Reservations')

    cy.get("[data-test='cards']").children().should('have.length', 9)
    cy.get("[data-test='cards']").first().contains('h2', 'Christie')
    cy.get("[data-test='cards']").first().contains('12/29')
    cy.get("[data-test='cards']").first().contains('7:00 pm')
    cy.get("[data-test='cards']").first().contains('Number of guests: 12')
    cy.get("[data-test='cards']").first().contains('button','Cancel')

    cy.get("[data-test='cards']").children().should('have.length', 9)
    cy.get("[data-test='cards']").last().contains('h2', 'Brittany')
    cy.get("[data-test='cards']").last().contains('h3', '9/9')
    cy.get("[data-test='cards']").last().contains('7:30 pm')
    cy.get("[data-test='cards']").last().contains('Number of guests: 3')
    cy.get("[data-test='cards']").last().contains('button','Cancel')
  })

  it('should add another reservation if all input fields are complete', () => {
    cy.intercept('POST','http://localhost:3001/api/v1/reservations', {
      statusCode: 201,
      fixture: 'postRes'
    }).as('postReservation')
    cy.get("[data-test='cards']").children().should('have.length', 9)
    cy.get("[data-test='name']").focus().type('Amy')
    cy.get("[data-test='date']").focus().type('1/1')
    cy.get("[data-test='time']").focus().type('7:00')
    cy.get("[data-test='guestnumber']").focus().type('3')
    cy.get("[data-test='add-button']").click();
    cy.wait('@postReservation')
    cy.get("[data-test='cards']").children().should('have.length', 10)
    cy.get("[data-test='cards']").last().contains('h2', 'Amy')
    cy.get("[data-test='cards']").last().contains('1/1')
    cy.get("[data-test='cards']").last().contains('7:00 pm')
    cy.get("[data-test='cards']").last().contains('Number of guests: 3')
    cy.get("[data-test='cards']").last().contains('button','Cancel')
  })

  it('should display error message when not all input fields are complete', () => {
    // cy.intercept('POST','http://localhost:3001/api/v1/reservations', {
    //   statusCode: 400,
    //   fixture: 'postError'
    // }).as('postErrorPage')
    cy.get("[data-test='cards']").children().should('have.length', 9)
    cy.get("[data-test='name']").should('have.value','')
    cy.get("[data-test='date']").focus().type('1/1')
    cy.get("[data-test='time']").focus().type('7:00')
    cy.get("[data-test='guestnumber']").focus().type('3')
    cy.get("[data-test='add-button']").click()
    // .then(() => {
    //   cy.wait('@postErrorPage')
    // })

    cy.get("[data-test='errorMessage']").contains('h2','Please fill out all input fields')
    cy.get("[data-test='cards']").children().should('have.length', 9)
    cy.get("[data-test='cards']").last().contains('h2', 'Brittany')
    cy.get("[data-test='cards']").last().contains('h3', '9/9')
    cy.get("[data-test='cards']").last().contains('7:30 pm')
    cy.get("[data-test='cards']").last().contains('Number of guests: 3')
    cy.get("[data-test='cards']").last().contains('button','Cancel')
  })

  it ('should be able to detele a reservation', () => {
    cy.get("[data-test='cards']").children().last().find("[data-test='delete-button']").click()
    cy.get("[data-test='cards']").children().should('have.length', 8)
    cy.get("[data-test='cards']").last().contains('h2', 'Travis')
    cy.get("[data-test='cards']").last().contains('h3', '6/8')
    cy.get("[data-test='cards']").last().contains('7:00 pm')
    cy.get("[data-test='cards']").last().contains('Number of guests: 12')
    cy.get("[data-test='cards']").last().contains('button','Cancel')
  })
})