let Version = "V3"; let BaseUrl = "http://localhost:2370/ghost/#/setup"

// Escenario 1 : Login failed without email and password
describe('Login failed without email and password', () => {
  it('Given I navigate to page "' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('I try to login', () => {
    cy.get('#ember12').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version + "E1");
  })

})

// Scenario 2 : Login failed without email
describe('Login failed without email', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with password: "Colombia2022"', () => {
    cy.get('#ember10').type('Colombia2022.')
  })

  it('I try to login', () => {
    cy.get('#ember12').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version + "E2");
  })
})


// Scenario 3 : Login failed without password
describe('Login failed without password', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with "r.celis@uniandes.edu.com"', () => {
    cy.get('#ember8').type('r.celis@uniandes.edu.com')
  })

  it('I try to login', () => {
    cy.get('#ember12').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version +"E3");
  })
})

// Scenario 4 : Login failed with invalid email format
describe('Login failed with invalid email format', () => {
  it('Given I navigate to page' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with "r.celisuniandes.edu.com" and "Colombia2022"', () => {
    cy.get('#ember8').type('r.celisuniandes.edu.com')
    cy.get('#ember10').type('Colombia2022.')
  })

  it('I try to login', () => {
    cy.get('#ember12').click()
  })

  it('Then I expect to see in signin "Please fill out the form to sign in."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('Please fill out the form to sign in.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version +"E4");
  })

})

// Scenario 5 : Login failed with non-existent user
describe('Login failed with non-existent user', () => {
  it('Given I navigate to page ' + BaseUrl, () => {
    cy.visit(BaseUrl)
  })

  it('When I fill login with "no_exti@uniandes.edu.com" and "Colombia2022."', () => {
    cy.get('#ember10').type('no_exti@uniandes.edu.com')
    cy.get('#ember12').type('Colombia2022.')
  })

  it('I try to login', () => {
    cy.get('#ember12').click()
  })

  it('I expect to see in signin "There is no user with that email address."', async () => {
    cy.get('.main-error').should(($elements) => {
      let text = $elements.text
      expect(text).to.match('There is no user with that email address.');
    });
  })

  it('I try to capture snapshot', () => {
    cy.wait(2000);
    cy.screenshot("./login/" + Version + "E5");
  })

})
