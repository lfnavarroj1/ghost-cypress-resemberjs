describe('Forgot failed with non-existent user', () => {
  it('Given I navigate to page "http://localhost:2368/ghost/#/signin"', () => {
    cy.visit('http://localhost:2368/ghost/#/signin')
  })
  it('When I fill login with "emailNonExistent@email.com" and "p4ssw0rd.."', () => {
    cy.get('#identification').type('emailNonExistent@email.com')
    cy.get('#password').type('p4ssw0rd..')
  })
  it('I try to remember password', () => {
    cy.get('#ember6').click()
  })
  it('Then I expect to see "User not found."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('User not found.');
    });
  })
})